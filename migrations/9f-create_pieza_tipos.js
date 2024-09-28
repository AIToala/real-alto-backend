'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Pieza_Tipos', {
			id_pieza_tipo: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_tipo: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Tipos',
					key: 'id_tipo',
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
		await queryInterface.addIndex('Pieza_Tipos', ['id_pieza']);
		await queryInterface.addIndex('Pieza_Tipos', ['id_tipo']);
		await queryInterface.addConstraint('Pieza_Tipos', {
			fields: ['id_pieza', 'id_tipo'],
			type: 'unique',
			name: 'UQ_Pieza_Tipos_id_pieza_id_tipo',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Pieza_Tipos');
	},
};
