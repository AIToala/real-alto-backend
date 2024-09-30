'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('museo_contactos', {
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
					model: 'museos',
					key: 'id_museo',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			id_contacto: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'contactos',
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
		await queryInterface.addIndex('museo_contactos', ['id_museo']);
		await queryInterface.addIndex('museo_contactos', ['id_contacto']);
		await queryInterface.addConstraint('museo_contactos', {
			fields: ['id_museo', 'id_contacto'],
			type: 'unique',
			name: 'UQ_museo_contactos_id_museo_id_contacto',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('museo_contactos');
	},
};
