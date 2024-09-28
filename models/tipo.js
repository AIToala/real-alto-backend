'use strict';

module.exports = (sequelize, DataTypes) => {
	const tipos = sequelize.define(
		'tipos',
		{
			id_tipo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_tipo: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING,
			},
			descripcion: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: 'Tipos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_tipo' }],
				},
			],
		}
	);
	tipos.associate = function (models) {
		tipos.hasMany(models.pieza_tipos, {
			foreignKey: 'id_tipo',
			as: 'pieza_tipos',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return tipos;
};
