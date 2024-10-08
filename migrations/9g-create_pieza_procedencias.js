'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pieza_procedencias', {
			id_pieza_procedencia: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_procedencia: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'procedencias',
					key: 'id_procedencia',
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
		await queryInterface.addIndex('pieza_procedencias', ['id_pieza']);
		await queryInterface.addIndex('pieza_procedencias', ['id_procedencia']);
		await queryInterface.addConstraint('pieza_procedencias', {
			fields: ['id_pieza', 'id_procedencia'],
			type: 'unique',
			name: 'UQ_pieza_procedencias_id_pieza_id_procedencia',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('pieza_procedencias');
	},
};
