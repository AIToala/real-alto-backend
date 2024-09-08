'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pieza_Usos extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Pieza_Usos.belongsTo(models.Pieza, {
				foreignKey: 'id_pieza',
			});
			models.Pieza_Usos.hasOne(models.Tipo_Uso, {
				foreignKey: 'id_tipo_uso',
			});
		}
	}
	Pieza_Usos.init(
		{
			id_pieza_usos: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_tipo_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Tipo_Uso',
					key: 'id_tipo_uso',
				},
			},
			id_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Pieza',
					key: 'id_pieza',
				},
			},
		},
		{
			sequelize,
			modelName: 'Pieza_Usos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_usos',
						},
					],
				},
				{
					name: 'id_tipo_uso',
					using: 'BTREE',
					fields: [
						{
							name: 'id_tipo_uso',
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
	return Pieza_Usos;
};
