'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('modelo_imagen', {
			id_modelo_imagen: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_modelo: Sequelize.STRING,
			path_archivo: Sequelize.STRING,
			tipo_archivo: Sequelize.STRING,
			descripcion: Sequelize.TEXT,
			autor: Sequelize.STRING,
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('modelo_imagen');
	},
};
