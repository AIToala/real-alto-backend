'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Pieza_Usos', {
			id_pieza_uso: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_uso: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Usos',
					key: 'id_uso',
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
		await queryInterface.addIndex('Pieza_Usos', ['id_pieza']);
		await queryInterface.addIndex('Pieza_Usos', ['id_uso']);
		await queryInterface.addConstraint('Pieza_Usos', {
			fields: ['id_pieza', 'id_uso'],
			type: 'unique',
			name: 'UQ_Pieza_Usos_id_pieza_id_uso',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Pieza_Usos');
	},
};
