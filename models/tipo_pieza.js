'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'tipo_piezas',
		{
			id_tipo_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_tipo_pieza: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			descripcion_tipo_pieza: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'Tipo_Piezas',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_tipo_pieza' }],
				},
			],
		}
	);
};
