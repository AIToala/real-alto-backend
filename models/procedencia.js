'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Procedencia extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Procedencia.belongsTo(models.Pieza, {
				foreignKey: 'id_procedencia',
			});
		}
	}
	Procedencia.init(
		{
			id_procedencia: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			periodo_inicio: DataTypes.DATE,
			periodo_fin: DataTypes.DATE,
			origen: DataTypes.STRING,
			nivel_cronologico: DataTypes.INTEGER,
			descripcion: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Procedencia',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_procedencia',
						},
					],
				},
			],
		}
	);
	return Procedencia;
};
