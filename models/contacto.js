'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	const contactos = sequelize.define(
		'contactos',
		{
			id_contacto: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			descripcion: DataTypes.STRING,
			telefono: DataTypes.STRING,
			celular: DataTypes.STRING,
			correo: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'contactos',
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
	contactos.associate = function (models) {
		contactos.hasMany(models.museo_contactos, {
			foreignKey: 'id_contacto',
			as: 'museo_contactos',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return contactos;
};
