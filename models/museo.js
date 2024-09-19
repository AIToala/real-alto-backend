'use strict';

module.exports = (sequelize, DataTypes) => {
	const museos = sequelize.define(
		'museos',
		{
			id_museo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_museo_contacto: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Museo_Contactos',
					key: 'id_museo_contacto',
				},
			},
			nombre_museo: DataTypes.STRING,
			descripcion_museo: DataTypes.TEXT,
			localizacion_museo: DataTypes.STRING,
			descripcion_localizacion_museo: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: 'Museos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo',
						},
					],
				},
				{
					name: 'id_museo_contacto',
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo_contacto',
						},
					],
				},
			],
		}
	);
	museos.associate = function (models) {
		museos.hasOne(models.museo_contactos, {
			foreignKey: 'id_museo_contacto',
			as: 'museo_contactos',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return museos;
};
