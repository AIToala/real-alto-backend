'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('modelos', {
			id_modelo: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_modelo_imagen: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'modelo_imagen',
					key: 'id_modelo_imagen',
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
		await queryInterface.addIndex('modelos', ['id_pieza']);
		await queryInterface.addIndex('modelos', ['id_modelo_imagen']);
		await queryInterface.addConstraint('modelos', {
			fields: ['id_pieza', 'id_modelo_imagen'],
			type: 'unique',
			name: 'UQ_modelos_id_pieza_id_modelo_imagen',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('modelos');
	},
};
