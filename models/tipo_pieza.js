'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tipo_Pieza extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Tipo_Pieza.belongsTo(models.Pieza, {
				foreignKey: 'id_tipo_pieza',
			});
		}
	}
	Tipo_Pieza.init(
		{
			id_tipo_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_tipo_pieza: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			descripcion_tipo_pieza: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Tipo_Pieza',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_tipo_pieza' }],
				},
			],
		}
	);
	return Tipo_Pieza;
};
