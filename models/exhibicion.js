'use strict';
module.exports = (sequelize, DataTypes) => {
	const exhibiciones = sequelize.define(
		'exhibiciones',
		{
			id_exhibicion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_exhibicion: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			descripcion: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: 'Exhibiciones',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion',
						},
					],
				},
			],
		}
	);
	exhibiciones.associate = function (models) {
		exhibiciones.hasMany(models.exhibicion_piezas, {
			foreignKey: 'id_exhibicion',
			as: 'exhibicion_piezas',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return exhibiciones;
};
