'use strict';

module.exports = (sequelize, DataTypes) => {
	const pieza_dimensiones = sequelize.define(
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
	pieza_dimensiones.associate = function (models) {
		pieza_dimensiones.belongsTo(models.piezas, {
			foreignKey: 'id_pieza',
			as: 'piezas',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		pieza_dimensiones.belongsTo(models.dimensiones, {
			foreignKey: 'id_dimension',
			as: 'dimensiones',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return pieza_dimensiones;
};
