'use strict';
module.exports = (sequelize, DataTypes) => {
	const museo_contactos = sequelize.define(
		'museo_contactos',
		{
			id_museo_contacto: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_museo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'museos',
					key: 'id_museo',
				},
			},
			id_contacto: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'contactos',
					key: 'id_contacto',
				},
			},
		},
		{
			sequelize,
			tableName: 'museo_contactos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo_contacto',
						},
					],
				},
				{
					name: 'id_museo',
					using: 'BTREE',
					fields: [
						{
							name: 'id_museo',
						},
					],
				},
				{
					name: 'id_contacto',
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
	museo_contactos.associate = function (models) {
		museo_contactos.belongsTo(models.museos, {
			foreignKey: 'id_museo',
			as: 'museo',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		museo_contactos.belongsTo(models.contactos, {
			foreignKey: 'id_contacto',
			as: 'contacto',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return museo_contactos;
};
