'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Exhibicion_Pieza extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Exhibicion_Pieza.hasOne(models.Exhibicion, {
				foreignKey: 'id_exhibicion',
			});

			models.Exhibicion_Pieza.belongsTo(models.Pieza, {
				foreignKey: 'id_pieza',
			});
		}
	}
	Exhibicion_Pieza.init(
		{
			id_exhibicion_pieza: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_exhibicion: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Exhibicion',
					key: 'id_exhibicion',
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
			modelName: 'Exhibicion_Pieza',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion_pieza',
						},
					],
				},
				{
					name: 'id_exhibicion',
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion',
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
	return Exhibicion_Pieza;
};
