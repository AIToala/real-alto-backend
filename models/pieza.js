'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pieza extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Pieza.hasOne(models.Procedencia, {
				foreignKey: 'id_procedencia',
			});
			models.Pieza.hasOne(models.Tipo_Pieza, {
				foreignKey: 'id_tipo_pieza',
			});
			models.Pieza.hasOne(models.Modelo, {
				foreignKey: 'id_modelo',
			});
			models.Pieza.hasMany(models.Pieza_Dimension, {
				foreignKey: 'id_pieza_dimension',
			});
			models.Pieza.hasMany(models.Pieza_Usos, {
				foreignKey: 'id_pieza_uso',
			});
			models.Pieza.hasMany(models.Exhibicion_Pieza, {
				foreignKey: 'id_exhibicion_pieza',
			});
		}
	}
	Pieza.init(
		{
			id_pieza: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_procedencia: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Procedencia',
					key: 'id_procedencia',
				},
			},
			id_pieza_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Pieza_Usos',
					key: 'id_pieza_usos',
				},
			},
			id_tipo_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Tipo_Pieza',
					key: 'id_tipo_pieza',
				},
			},
			id_modelo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Modelo',
					key: 'id_modelo',
				},
			},
			id_pieza_dimension: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Pieza_Dimension',
					key: 'id_pieza_dimension',
				},
			},
			id_exhibicion_pieza: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'Exhibicion_Pieza',
					key: 'id_exhibicion_pieza',
				},
			},
			nombre_pieza: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
			descripcion_corta: DataTypes.TEXT,
			activo: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Pieza',
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
					name: 'id_pieza_uso',
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_uso',
						},
					],
				},
				{
					name: 'id_tipo_pieza',
					using: 'BTREE',
					fields: [
						{
							name: 'id_tipo_pieza',
						},
					],
				},
				{
					name: 'id_modelo',
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo',
						},
					],
				},
				{
					name: 'id_pieza_dimension',
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_dimension',
						},
					],
				},
				{
					name: 'id_exhibicion_pieza',
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion_pieza',
						},
					],
				},
			],
		}
	);
	return Pieza;
};
