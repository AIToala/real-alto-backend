'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Pieza_Dimensiones', {
			id_pieza_dimension: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
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
			id_dimension: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Dimensiones',
					key: 'id_dimension',
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
		await queryInterface.addIndex('Pieza_Dimensiones', ['id_pieza']);
		await queryInterface.addIndex('Pieza_Dimensiones', ['id_dimension']);
		await queryInterface.addConstraint('Pieza_Dimensiones', {
			fields: ['id_pieza', 'id_dimension'],
			type: 'unique',
			name: 'UQ_Pieza_Dimensiones_id_pieza_id_dimension',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Pieza_Dimensiones');
	},
};
