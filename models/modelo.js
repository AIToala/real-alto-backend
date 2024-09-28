'use strict';

module.exports = (sequelize, DataTypes) => {
	const modelos = sequelize.define(
		'modelos',
		{
			id_modelo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_modelo_imagen: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'modelo_imagen',
					key: 'id_modelo_imagen',
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
			tableName: 'Modelos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo',
						},
					],
				},
				{
					name: 'id_modelo_imagen',
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo_imagen',
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
	modelos.associate = function (models) {
		modelos.hasOne(models.modelo_imagen, {
			foreignKey: 'id_modelo_imagen',
			as: 'modelo_imagen',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		modelos.hasOne(models.piezas, {
			foreignKey: 'id_pieza',
			as: 'pieza',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'SET NULL', // Delete behavior
		});
	};
	return modelos;
};
