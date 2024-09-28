'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Exhibicion_Piezas', {
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
					model: 'Exhibiciones',
					key: 'id_exhibicion',
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
		await queryInterface.addIndex('Exhibicion_Piezas', ['id_exhibicion']);
		await queryInterface.addIndex('Exhibicion_Piezas', ['id_pieza']);
		await queryInterface.addConstraint('Exhibicion_Piezas', {
			fields: ['id_exhibicion', 'id_pieza'],
			type: 'unique',
			name: 'UQ_Exhibicion_Piezas_id_exhibicion_id_pieza',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Exhibicion_Piezas');
	},
};
