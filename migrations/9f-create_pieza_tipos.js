'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pieza_tipos', {
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
					model: 'tipos',
					key: 'id_tipo',
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
		await queryInterface.addIndex('pieza_tipos', ['id_pieza']);
		await queryInterface.addIndex('pieza_tipos', ['id_tipo']);
		await queryInterface.addConstraint('pieza_tipos', {
			fields: ['id_pieza', 'id_tipo'],
			type: 'unique',
			name: 'UQ_pieza_tipos_id_pieza_id_tipo',
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('pieza_tipos');
	},
};
