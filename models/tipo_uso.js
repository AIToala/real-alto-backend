'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tipo_Uso extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Tipo_Uso.belongsTo(models.Pieza_Usos, {
				foreignKey: 'id_tipo_uso',
			});
		}
	}
	Tipo_Uso.init(
		{
			id_tipo_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_tipo_uso: DataTypes.STRING,
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Tipo_Uso',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_tipo_uso' }],
				},
			],
		}
	);
	return Tipo_Uso;
};
