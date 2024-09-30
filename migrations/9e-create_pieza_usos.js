'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pieza_usos', {
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
					model: 'usos',
					key: 'id_uso',
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
		await queryInterface.addIndex('pieza_usos', ['id_pieza']);
		await queryInterface.addIndex('pieza_usos', ['id_uso']);
		await queryInterface.addConstraint('pieza_usos', {
			fields: ['id_pieza', 'id_uso'],
			type: 'unique',
			name: 'UQ_pieza_usos_id_pieza_id_uso',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('pieza_usos');
	},
};
