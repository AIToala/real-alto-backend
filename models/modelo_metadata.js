'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Modelo_Metadata extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Modelo_Metadata.belongsTo(models.Modelo, {
				foreignKey: 'id_modelo_metadata',
				as: 'modelo',
			});
		}
	}
	Modelo_Metadata.init(
		{
			id_modelo_metadata: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_modelo: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
			autor: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Modelo_Metadata',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
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
	return Modelo_Metadata;
};
