'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'piezas',
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
					model: 'Procedencias',
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
					model: 'Tipo_Piezas',
					key: 'id_tipo_pieza',
				},
			},
			id_modelo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Modelos',
					key: 'id_modelo',
				},
			},
			id_pieza_dimension: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Pieza_Dimensiones',
					key: 'id_pieza_dimension',
				},
			},
			id_exhibicion_pieza: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'Exhibicion_Piezas',
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
};
