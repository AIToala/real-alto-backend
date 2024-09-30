'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('exhibicion_piezas', {
			id_exhibicion_pieza: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_exhibicion: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'exhibiciones',
					key: 'id_exhibicion',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			id_pieza: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'piezas',
					key: 'id_pieza',
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
		await queryInterface.addIndex('exhibicion_piezas', ['id_exhibicion']);
		await queryInterface.addIndex('exhibicion_piezas', ['id_pieza']);
		await queryInterface.addConstraint('exhibicion_piezas', {
			fields: ['id_exhibicion', 'id_pieza'],
			type: 'unique',
			name: 'UQ_exhibicion_piezas_id_exhibicion_id_pieza',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('exhibicion_piezas');
	},
};
