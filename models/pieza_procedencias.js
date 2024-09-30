'use strict';

module.exports = (sequelize, DataTypes) => {
	const pieza_procedencias = sequelize.define(
		'pieza_procedencias',
		{
			id_pieza_procedencia: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_procedencia: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'procedencias',
					key: 'id_procedencia',
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
			tableName: 'pieza_procedencias',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_procedencia',
						},
					],
				},
				{
					name: 'id_procedencia',
					using: 'BTREE',
					fields: [
						{
							name: 'id_procedencia',
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
	pieza_procedencias.associate = function (models) {
		pieza_procedencias.belongsTo(models.procedencias, {
			foreignKey: 'id_procedencia',
			as: 'procedencia',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		pieza_procedencias.belongsTo(models.piezas, {
			foreignKey: 'id_pieza',
			as: 'pieza',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return pieza_procedencias;
};
