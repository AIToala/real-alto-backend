'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pieza_Dimension extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Pieza_Dimension.belongsTo(models.Pieza, {
				foreignKey: 'id_pieza',
			});
			models.Pieza_Dimension.hasOne(models.Dimension, {
				foreignKey: 'id_dimension',
			});
		}
	}
	Pieza_Dimension.init(
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
					model: 'Pieza',
					key: 'id_pieza',
				},
			},
			id_dimension: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Dimension',
					key: 'id_dimension',
				},
			},
		},
		{
			sequelize,
			modelName: 'Pieza_Dimension',
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
	return Pieza_Dimension;
};
