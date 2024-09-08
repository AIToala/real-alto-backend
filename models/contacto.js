'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Contacto extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Contacto.belongsTo(models.Museo_Contactos, {
				foreignKey: 'id_contacto',
			});
		}
	}
	Contacto.init(
		{
			id_contacto: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			telefono: DataTypes.STRING,
			celular: DataTypes.STRING,
			correo: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Contacto',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
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
	return Contacto;
};
