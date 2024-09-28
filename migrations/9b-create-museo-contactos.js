'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Museo_Contactos', {
			id_museo_contacto: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_museo: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Museos',
					key: 'id_museo',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			id_contacto: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Contactos',
					key: 'id_contacto',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
		await queryInterface.addIndex('Museo_Contactos', ['id_museo']);
		await queryInterface.addIndex('Museo_Contactos', ['id_contacto']);
		await queryInterface.addConstraint('Museo_Contactos', {
			fields: ['id_museo', 'id_contacto'],
			type: 'unique',
			name: 'UQ_Museo_Contactos_id_museo_id_contacto',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Museo_Contactos');
	},
};
