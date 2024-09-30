'use strict';

module.exports = (sequelize, DataTypes) => {
	const usos = sequelize.define(
		'usos',
		{
			id_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_uso: DataTypes.STRING,
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'usos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_tipo_uso' }],
				},
			],
		}
	);
	usos.associate = function (models) {
		usos.hasMany(models.pieza_usos, {
			foreignKey: 'id_uso',
			as: 'pieza_usos',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return usos;
};
