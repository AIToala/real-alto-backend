'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Exhibicion extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Exhibicion.belongsTo(models.Exhibicion_Pieza, {
				foreignKey: 'id_exhibicion',
			});
		}
	}
	Exhibicion.init(
		{
			id_exhibicion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_exhibicion: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Exhibicion',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion',
						},
					],
				},
			],
		}
	);
	return Exhibicion;
};
