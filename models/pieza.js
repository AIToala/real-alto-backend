'use strict';

module.exports = (sequelize, DataTypes) => {
	const piezas = sequelize.define(
		'piezas',
		{
			id_pieza: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_pieza: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
			descripcion_corta: DataTypes.TEXT,
			activo: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			tableName: 'Piezas',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
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
	piezas.associate = function (models) {
		piezas.hasMany(models.pieza_procedencias, {
			foreignKey: 'id_pieza',
			as: 'pieza_procedencia',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.pieza_usos, {
			foreignKey: 'id_pieza',
			as: 'pieza_uso',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.pieza_tipos, {
			foreignKey: 'id_pieza',
			as: 'pieza_tipo',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.modelos, {
			foreignKey: 'id_pieza',
			as: 'modelo',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.pieza_dimensiones, {
			foreignKey: 'id_pieza',
			as: 'pieza_dimension',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.exhibicion_piezas, {
			foreignKey: 'id_pieza',
			as: 'exhibicion_pieza',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return piezas;
};
