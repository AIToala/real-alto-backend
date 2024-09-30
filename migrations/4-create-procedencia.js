'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('procedencias', {
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
		await queryInterface.addIndex('procedencias', ['origen']);
		await queryInterface.addIndex('procedencias', ['nivel_cronologico']);
		await queryInterface.addConstraint('procedencias', {
			fields: ['origen', 'nivel_cronologico'],
			type: 'unique',
			name: 'UQ_procedencias_origen_nivel_cronologico',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('procedencias');
	},
};
