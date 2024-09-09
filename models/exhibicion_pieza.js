'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'exhibicion_piezas',
		{
			id_exhibicion_pieza: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_exhibicion: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Exhibiciones',
					key: 'id_exhibicion',
				},
			},
			id_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Piezas',
					key: 'id_pieza',
				},
			},
		},
		{
			sequelize,
			tableName: 'Exhibicion_Piezas',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion_pieza',
						},
					],
				},
				{
					name: 'id_exhibicion',
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion',
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
			],
		}
	);
};
