'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'pieza_dimensiones',
		{
			id_pieza_dimension: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Piezas',
					key: 'id_pieza',
				},
			},
			id_dimension: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Dimensiones',
					key: 'id_dimension',
				},
			},
		},
		{
			sequelize,
			tableName: 'Pieza_Dimensiones',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_dimension',
						},
					],
				},
				{
					name: 'id_pieza',
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza',
						},
					],
				},
				{
					name: 'id_dimension',
					using: 'BTREE',
					fields: [
						{
							name: 'id_dimension',
						},
					],
				},
			],
		}
	);
};
