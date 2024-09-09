'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'contactos',
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
			tableName: 'Contactos',
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
};
