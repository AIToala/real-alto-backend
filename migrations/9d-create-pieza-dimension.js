'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pieza_dimensiones', {
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
					model: 'piezas',
					key: 'id_pieza',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			id_dimension: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'dimensiones',
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
		await queryInterface.addIndex('pieza_dimensiones', ['id_pieza']);
		await queryInterface.addIndex('pieza_dimensiones', ['id_dimension']);
		await queryInterface.addConstraint('pieza_dimensiones', {
			fields: ['id_pieza', 'id_dimension'],
			type: 'unique',
			name: 'UQ_pieza_dimensiones_id_pieza_id_dimension',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('pieza_dimensiones');
	},
};
