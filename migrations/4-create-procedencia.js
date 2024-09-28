'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Procedencias', {
			id_procedencia: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			periodo_inicio: {
				type: Sequelize.STRING,
			},
			periodo_fin: {
				type: Sequelize.STRING,
			},
			origen: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nivel_cronologico: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			descripcion: {
				type: Sequelize.TEXT,
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
		await queryInterface.addIndex('Procedencias', ['origen']);
		await queryInterface.addIndex('Procedencias', ['nivel_cronologico']);
		await queryInterface.addConstraint('Procedencias', {
			fields: ['origen', 'nivel_cronologico'],
			type: 'unique',
			name: 'UQ_Procedencias_origen_nivel_cronologico',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Procedencias');
	},
};
