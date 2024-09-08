'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Museo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Museo.hasMany(models.Museo_Contactos, {
				foreignKey: 'id_museo_contacto',
			});
		}
	}
	Museo.init(
		{
			id_museo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_museo_contacto: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Museo_Contactos',
					key: 'id_museo_contacto',
				},
			},
			nombre_museo: DataTypes.STRING,
			descripcion_museo: DataTypes.TEXT,
			localizacion_museo: DataTypes.STRING,
			descripcion_localizacion_museo: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Museo',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo',
						},
					],
				},
				{
					name: 'id_museo_contacto',
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo_contacto',
						},
					],
				},
			],
		}
	);
	return Museo;
};
