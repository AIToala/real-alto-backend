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
			nombre_museo: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
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
			],
		}
	);
	museos.associate = function (models) {
		museos.hasMany(models.museo_contactos, {
			foreignKey: 'id_museo',
			as: 'museo_contactos',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return museos;
};
