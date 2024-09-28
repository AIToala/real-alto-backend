'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Modelos', {
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
					model: 'Modelo_Imagen',
					key: 'id_modelo_imagen',
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
		await queryInterface.addIndex('Modelos', ['id_modelo_imagen']);
		await queryInterface.addIndex('Modelos', ['id_pieza']);
		await queryInterface.addConstraint('Modelos', {
			fields: ['id_modelo_imagen', 'id_pieza'],
			type: 'unique',
			name: 'unique_modelo_imagen_pieza',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Modelos');
	},
};
