'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Pieza_Procedencias', {
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
					model: 'Procedencias',
					key: 'id_procedencia',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			id_pieza: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Piezas',
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
		await queryInterface.addIndex('Pieza_Procedencias', ['id_pieza']);
		await queryInterface.addIndex('Pieza_Procedencias', ['id_procedencia']);
		await queryInterface.addConstraint('Pieza_Procedencias', {
			fields: ['id_pieza', 'id_procedencia'],
			type: 'unique',
			name: 'UQ_Pieza_Procedencias_id_pieza_id_procedencia',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Pieza_Procedencias');
	},
};
