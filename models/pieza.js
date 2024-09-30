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
			tableName: 'piezas',
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
			as: 'pieza_procedencias',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.pieza_usos, {
			foreignKey: 'id_pieza',
			as: 'pieza_usos',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.pieza_tipos, {
			foreignKey: 'id_pieza',
			as: 'pieza_tipos',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.modelos, {
			foreignKey: 'id_pieza',
			as: 'modelos',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		piezas.hasMany(models.pieza_dimensiones, {
			foreignKey: 'id_pieza',
			as: 'pieza_dimensiones',
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
