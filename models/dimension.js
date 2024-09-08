'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Dimension extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Dimension.belongsTo(models.Pieza_Dimension, {
				foreignKey: 'id_pieza_dimension',
			});
		}
	}
	Dimension.init(
		{
			id_dimension: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			valor_medida: DataTypes.DECIMAL,
			unidad_medida: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Dimension',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_dimension' }],
				},
			],
		}
	);
	return Dimension;
};
