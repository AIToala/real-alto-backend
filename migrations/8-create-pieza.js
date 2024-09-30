'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('piezas', {
			id_pieza: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nombre_pieza: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			descripcion: {
				type: Sequelize.TEXT,
			},
			descripcion_corta: {
				type: Sequelize.TEXT,
			},
			activo: {
				type: Sequelize.BOOLEAN,
				defaultValue: 1,
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
	},
	async down(queryInterface) {
		await queryInterface.dropTable('piezas');
	},
};
