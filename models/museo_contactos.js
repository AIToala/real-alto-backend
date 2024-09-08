'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Museo_Contactos extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Museo_Contactos.belongsTo(models.Museo, {
				foreignKey: 'id_museo',
			});
			models.Museo_Contactos.hasOne(models.Contacto, {
				foreignKey: 'id_contacto',
			});
		}
	}
	Museo_Contactos.init(
		{
			id_museo_contacto: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_museo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Museo',
					key: 'id_museo',
				},
			},
			id_contacto: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Contacto',
					key: 'id_contacto',
				},
			},
		},
		{
			sequelize,
			modelName: 'Museo_Contactos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo_contacto',
						},
					],
				},
				{
					name: 'id_museo',
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo',
						},
					],
				},
				{
					name: 'id_contacto',
					using: 'BTREE',
					fields: [
						{
							name: 'id_contacto',
						},
					],
				},
			],
		}
	);
	return Museo_Contactos;
};
