'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('Modelos', {
			fields: ['id_modelo_metadata'],
			type: 'foreign key',
			name: 'FK_Modelos_Modelo_Metadata',
			references: {
				table: 'Modelo_Metadata',
				field: 'id_modelo_metadata',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Piezas', {
			fields: ['id_procedencia'],
			type: 'foreign key',
			name: 'FK_Piezas_Procedencia',
			references: {
				table: 'Procedencias',
				field: 'id_procedencia',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Piezas', {
			fields: ['id_pieza_uso'],
			type: 'foreign key',
			name: 'FK_Piezas_Pieza_Uso',
			references: {
				table: 'Pieza_Usos',
				field: 'id_pieza_uso',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Piezas', {
			fields: ['id_tipo_pieza'],
			type: 'foreign key',
			name: 'FK_Piezas_Tipo_Pieza',
			references: {
				table: 'Tipo_Piezas',
				field: 'id_tipo_pieza',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Piezas', {
			fields: ['id_exhibicion_pieza'],
			type: 'foreign key',
			name: 'FK_Piezas_Exhibicion_Piezas',
			references: {
				table: 'Exhibicion_Piezas',
				field: 'id_exhibicion_pieza',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Piezas', {
			fields: ['id_pieza_dimension'],
			type: 'foreign key',
			name: 'FK_Piezas_Pieza_Dimension',
			references: {
				table: 'Pieza_Dimensiones',
				field: 'id_pieza_dimension',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Piezas', {
			fields: ['id_modelo'],
			type: 'foreign key',
			name: 'FK_Piezas_Modelo',
			references: {
				table: 'Modelos',
				field: 'id_modelo',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Museos', {
			fields: ['id_museo_contacto'],
			type: 'foreign key',
			name: 'FK_Museos_Contactos',
			references: {
				table: 'Museo_Contactos',
				field: 'id_museo_contacto',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Museo_Contactos', {
			fields: ['id_museo'],
			type: 'foreign key',
			name: 'FK_Museo_Contactos_Museos',
			references: {
				table: 'Museos',
				field: 'id_museo',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Museo_Contactos', {
			fields: ['id_contacto'],
			type: 'foreign key',
			name: 'FK_Museo_Contactos_Contacto',
			references: {
				table: 'Contactos',
				field: 'id_contacto',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Exhibicion_Piezas', {
			fields: ['id_exhibicion'],
			type: 'foreign key',
			name: 'FK_Exhibicion_Piezas_Exhibicion',
			references: {
				table: 'Exhibiciones',
				field: 'id_exhibicion',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Exhibicion_Piezas', {
			fields: ['id_pieza'],
			type: 'foreign key',
			name: 'FK_Exhibicion_Piezas_Pieza',
			references: {
				table: 'Piezas',
				field: 'id_pieza',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Pieza_Dimensiones', {
			fields: ['id_pieza'],
			type: 'foreign key',
			name: 'FK_Pieza_Dimensiones_Pieza',
			references: {
				table: 'Piezas',
				field: 'id_pieza',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryInterface.addConstraint('Pieza_Dimensiones', {
			fields: ['id_dimension'],
			type: 'foreign key',
			name: 'FK_Pieza_Dimensiones_Dimension',
			references: {
				table: 'Dimensiones',
				field: 'id_dimension',
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('Modelos', 'FK_Modelos_Modelo_Metadata');
		await queryInterface.removeConstraint('Piezas', 'FK_Piezas_Procedencia');
		await queryInterface.removeConstraint('Piezas', 'FK_Piezas_Pieza_Uso');
		await queryInterface.removeConstraint('Piezas', 'FK_Piezas_Tipo_Pieza');
		await queryInterface.removeConstraint('Piezas', 'FK_Piezas_Exhibicion_Piezas');
		await queryInterface.removeConstraint('Piezas', 'FK_Piezas_Pieza_Dimension');
		await queryInterface.removeConstraint('Piezas', 'FK_Piezas_Modelo');
		await queryInterface.removeConstraint('Museos', 'FK_Museos_Contactos');
		await queryInterface.removeConstraint('Museo_Contactos', 'FK_Museo_Contactos_Museos');
		await queryInterface.removeConstraint('Museo_Contactos', 'FK_Museo_Contactos_Contacto');
		await queryInterface.removeConstraint('Exhibicion_Piezas', 'FK_Exhibicion_Piezas_Exhibicion');
		await queryInterface.removeConstraint('Exhibicion_Piezas', 'FK_Exhibicion_Piezas_Pieza');
		await queryInterface.removeConstraint('Pieza_Dimensiones', 'FK_Pieza_Dimensiones_Pieza');
		await queryInterface.removeConstraint('Pieza_Dimensiones', 'FK_Pieza_Dimensiones_Dimension');
	},
};
