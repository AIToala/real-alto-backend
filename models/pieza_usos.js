'use strict';

module.exports = (sequelize, DataTypes) => {
	const pieza_usos = sequelize.define(
		'pieza_usos',
		{
			id_pieza_uso: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'usos',
					key: 'id_uso',
				},
			},
			id_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'piezas',
					key: 'id_pieza',
				},
			},
		},
		{
			sequelize,
			tableName: 'pieza_usos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_uso',
						},
					],
				},
				{
					name: 'id_uso',
					using: 'BTREE',
					fields: [
						{
							name: 'id_uso',
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
	pieza_usos.associate = function (models) {
		pieza_usos.belongsTo(models.usos, {
			foreignKey: 'id_uso',
			as: 'uso',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		pieza_usos.belongsTo(models.piezas, {
			foreignKey: 'id_pieza',
			as: 'pieza',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return pieza_usos;
};
