'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Modelo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Modelo.hasOne(models.Modelo_Metadata, {
				foreignKey: 'id_modelo_metadata',
			});
			Modelo.belongsTo(models.Pieza, {
				foreignKey: 'id_modelo',
			});
		}
	}
	Modelo.init(
		{
			id_modelo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_modelo_metadata: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Modelo_Metadata',
					key: 'id_modelo_metadata',
				},
			},
			nombre_archivo: DataTypes.STRING,
			path_archivo: DataTypes.STRING,
			myme_type: DataTypes.STRING,
			file_type: DataTypes.STRING,
			tamaño_modelo: DataTypes.INTEGER,
			thumbnail: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Modelo',
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
					name: 'id_modelo_metadata',
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo_metadata',
						},
					],
				},
			],
		}
	);
	return Modelo;
};
