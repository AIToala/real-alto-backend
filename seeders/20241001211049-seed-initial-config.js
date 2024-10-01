'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('tipos', [
			{
				id_tipo: 1,
				nombre_tipo: 'CUENCOS',
				descripcion:
					'Recipientes de forma cóncava utilizados para contener líquidos o alimentos. Frecuentemente de cerámica.',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_tipo: 2,
				nombre_tipo: 'OLLAS',
				descripcion:
					'Vasijas generalmente de mayor tamaño, usadas para cocinar y almacenar alimentos. Caracterizadas por su forma redondeada y amplia boca.',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_tipo: 3,
				nombre_tipo: 'FIGURINAS',
				descripcion:
					'Pequeñas esculturas o figuras humanas, animales o mitológicas, realizadas en distintos materiales como cerámica, piedra o metal.',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);

		await queryInterface.bulkInsert(
			'usos',
			[
				{
					id_uso: 1,
					nombre_uso: 'COTIDIANO',
					descripcion:
						'Uso cotidiano o diario, relacionado con actividades comunes como cocinar, comer, o almacenar alimentos.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_uso: 2,
					nombre_uso: 'RITUAL',
					descripcion: 'Uso ceremonial o sagrado, relacionado con actividades religiosas, espirituales o simbólicas.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'procedencias',
			[
				{
					id_procedencia: 1,
					origen: 'VALDIVIA',
					nivel_cronologico: 1,
					periodo_inicio: '3950 AC',
					periodo_fin: '3150 AC',
					descripcion:
						'Primer nivel cronológico de la cultura Valdivia, correspondiente a su fase formativa más antigua, caracterizada por el inicio del desarrollo cerámico y asentamientos iniciales.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_procedencia: 2,
					origen: 'VALDIVIA',
					nivel_cronologico: 2,
					periodo_inicio: '3150 AC',
					periodo_fin: '2900 AC',
					descripcion:
						'Segundo nivel cronológico con un desarrollo mayor en la cerámica, viviendas más estables, y primeras formas de agricultura incipiente.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_procedencia: 3,
					origen: 'VALDIVIA',
					nivel_cronologico: 3,
					periodo_inicio: '2900 AC',
					periodo_fin: '2700 AC',
					descripcion:
						'Tercer nivel donde se observan asentamientos más complejos, cerámica decorada con motivos geométricos, y evidencias de una economía agrícola y de pesca más establecida.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_procedencia: 4,
					origen: 'VALDIVIA',
					nivel_cronologico: 4,
					periodo_inicio: '2700 AC',
					periodo_fin: '2400 AC',
					descripcion:
						'Cuarto nivel caracterizado por una mayor diversidad en formas y decoraciones cerámicas, además de un crecimiento en la complejidad social y organización comunitaria.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_procedencia: 5,
					origen: 'VALDIVIA',
					nivel_cronologico: 5,
					periodo_inicio: '2400 AC',
					periodo_fin: '2200 AC',
					descripcion:
						'Quinto nivel donde se observa una mayor complejidad en la producción cerámica, así como una expansión de las actividades económicas, incluyendo agricultura y comercio.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_procedencia: 6,
					origen: 'VALDIVIA',
					nivel_cronologico: 6,
					periodo_inicio: '2200 AC',
					periodo_fin: '2000 AC',
					descripcion:
						'Sexto nivel con evidencia de estructuras sociales más complejas y desarrollos en la cultura material, reflejando una sociedad más establecida y próspera.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_procedencia: 7,
					origen: 'VALDIVIA',
					nivel_cronologico: 7,
					periodo_inicio: '2000 AC',
					periodo_fin: '1800 AC',
					descripcion:
						'Séptimo y último nivel de la cultura Valdivia, marcando el final de este período con una sociedad bien desarrollada y cambios significativos en las prácticas culturales.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'piezas',
			[
				// CUENCOS - Cultura Valdivia
				{
					id_pieza: 1,
					nombre_pieza: 'CUENCO-VALDIVIA-PEQUEÑO',
					descripcion:
						'Cuenco de cerámica pequeña, utilizado por la cultura Valdivia para servir alimentos y bebidas en rituales diarios.',
					descripcion_corta: 'Cuenco de cerámica pequeño de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 2,
					nombre_pieza: 'CUENCO-VALDIVIA-DECORADO',
					descripcion:
						'Cuenco de tamaño mediano decorado con motivos geométricos, comúnmente encontrado en asentamientos valdivianos. Usado para ceremonias o almacenaje.',
					descripcion_corta: 'Cuenco decorado de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 3,

					nombre_pieza: 'CUENCO-VALDIVIA-GRANDE',
					descripcion:
						'Cuenco grande de cerámica gruesa, utilizado por los valdivianos para almacenar granos y otros alimentos. Decorado con incisiones simples.',
					descripcion_corta: 'Cuenco grande para almacenaje de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				// OLLAS - Cultura Valdivia
				{
					id_pieza: 4,

					nombre_pieza: 'OLLA-VALDIVIA-PEQUEÑA',
					descripcion:
						'Olla pequeña de la cultura Valdivia, usada para cocinar alimentos en fuego directo. Con forma globular y boca estrecha.',
					descripcion_corta: 'Olla pequeña de cerámica valdiviana.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 5,

					nombre_pieza: 'OLLA-VALDIVIA-CEREMONIAL',
					descripcion:
						'Olla mediana con decoraciones rituales, utilizada en ceremonias valdivianas para preparar alimentos especiales. Decorada con patrones en relieve.',
					descripcion_corta: 'Olla ceremonial de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 6,

					nombre_pieza: 'OLLA-VALDIVIA-GRANDE',
					descripcion:
						'Gran olla valdiviana utilizada para cocinar grandes cantidades de alimentos, tanto para uso doméstico como para celebraciones comunitarias.',
					descripcion_corta: 'Olla grande de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				// FIGURINAS - Cultura Valdivia
				{
					id_pieza: 7,

					nombre_pieza: 'FIGURINA-VALDIVIA-FEMENINA',
					descripcion:
						'Pequeña figurina de cerámica representando a una mujer, típica de la cultura Valdivia. Utilizada en rituales o como objeto simbólico de fertilidad.',
					descripcion_corta: 'Figurina femenina de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 8,

					nombre_pieza: 'FIGURINA-VALDIVIA-DECORADA',
					descripcion:
						'Figurina mediana con detalles decorativos, representando figuras humanas o animales. Estas figurinas formaban parte de ceremonias religiosas y culturales.',
					descripcion_corta: 'Figurina decorada de la cultura Valdivia.',
					activo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'dimensiones',
			[
				// CUENCOS Dimensions
				{
					id_dimension: 1,
					valor_medida: 5.5,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 2,
					valor_medida: 10.0,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_dimension: 3,
					valor_medida: 7.0,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 4,
					valor_medida: 12.5,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_dimension: 5,
					valor_medida: 9.5,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 6,
					valor_medida: 15.0,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				// OLLAS Dimensions
				{
					id_dimension: 7,
					valor_medida: 15.0,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 8,
					valor_medida: 12.0,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_dimension: 9,
					valor_medida: 20.0,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 10,
					valor_medida: 15.5,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_dimension: 11,
					valor_medida: 25.0,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 12,
					valor_medida: 20.0,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				// FIGURINAS Dimensions
				{
					id_dimension: 13,
					valor_medida: 8.0,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 14,
					valor_medida: 3.5,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_dimension: 15,
					valor_medida: 12.0,
					unidad_medida: 'cm',
					descripcion: 'ALTURA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_dimension: 16,
					valor_medida: 5.0,
					unidad_medida: 'cm',
					descripcion: 'DIAMETRO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'modelo_imagen',
			[
				// CUENCOS - Imágenes
				{
					id_modelo_imagen: 1,
					nombre_modelo: 'CUENCO-VALDIVIA-PEQUEÑO-IMAGEN-1',
					path_archivo: '/catalogo/images/cuenco13D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Imagen frontal del Cuenco Valdivia Pequeño.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 2,
					nombre_modelo: 'CUENCO-VALDIVIA-PEQUEÑO-IMAGEN-2',
					path_archivo: '/catalogo/images/cuenco1Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Imagen superior del Cuenco Valdivia Pequeño.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_modelo_imagen: 3,
					nombre_modelo: 'CUENCO-VALDIVIA-DECORADO-IMAGEN-1',
					path_archivo: '/catalogo/images/cuenco23D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Detalle decorativo del Cuenco Valdivia Decorado.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 4,
					nombre_modelo: 'CUENCO-VALDIVIA-DECORADO-IMAGEN-2',
					path_archivo: '/catalogo/images/cuenco2Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista lateral del Cuenco Valdivia Decorado.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_modelo_imagen: 5,
					nombre_modelo: 'CUENCO-VALDIVIA-GRANDE-IMAGEN-1',
					path_archivo: '/catalogo/images/cuenco33D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Imagen del Cuenco Valdivia Grande mostrando su tamaño.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 6,
					nombre_modelo: 'CUENCO-VALDIVIA-GRANDE-IMAGEN-2',
					path_archivo: '/catalogo/images/cuenco3Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Detalle de la base del Cuenco Valdivia Grande.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				// OLLAS - Imágenes
				{
					id_modelo_imagen: 7,
					nombre_modelo: 'OLLA-VALDIVIA-PEQUEÑA-IMAGEN-1',
					path_archivo: '/catalogo/images/olla13D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista frontal de la Olla Valdivia Pequeña.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 8,
					nombre_modelo: 'OLLA-VALDIVIA-PEQUEÑA-IMAGEN-2',
					path_archivo: '/catalogo/images/olla1Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista superior de la Olla Valdivia Pequeña.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_modelo_imagen: 9,
					nombre_modelo: 'OLLA-VALDIVIA-CEREMONIAL-IMAGEN-1',
					path_archivo: '/catalogo/images/olla23D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Decoración ritual de la Olla Valdivia Ceremonial.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 10,
					nombre_modelo: 'OLLA-VALDIVIA-CEREMONIAL-IMAGEN-2',
					path_archivo: '/catalogo/images/olla2Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista lateral de la Olla Valdivia Ceremonial.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_modelo_imagen: 11,
					nombre_modelo: 'OLLA-VALDIVIA-GRANDE-IMAGEN-1',
					path_archivo: '/catalogo/images/olla33D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista completa de la Olla Valdivia Grande.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 12,
					nombre_modelo: 'OLLA-VALDIVIA-GRANDE-IMAGEN-2',
					path_archivo: '/catalogo/images/olla3Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Detalle de la boca de la Olla Valdivia Grande.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				// FIGURINAS - Imágenes
				{
					id_modelo_imagen: 13,
					nombre_modelo: 'FIGURINA-VALDIVIA-FEMENINA-IMAGEN-1',
					path_archivo: '/catalogo/images/figurina13D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista frontal de la Figurina Valdivia Femenina.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 14,
					nombre_modelo: 'FIGURINA-VALDIVIA-FEMENINA-IMAGEN-2',
					path_archivo: '/catalogo/images/figurina1Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Detalle decorativo de la Figurina Valdivia Femenina.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id_modelo_imagen: 15,
					nombre_modelo: 'FIGURINA-VALDIVIA-DECORADA-IMAGEN-1',
					path_archivo: '/catalogo/images/figurina23D.png',
					tipo_archivo: 'image/png',
					descripcion: 'Vista completa de la Figurina Valdivia Decorada.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo_imagen: 16,
					nombre_modelo: 'FIGURINA-VALDIVIA-DECORADA-IMAGEN-2',
					path_archivo: '/catalogo/images/figurina2Tn.png',
					tipo_archivo: 'image/png',
					descripcion: 'Detalle de los grabados en la Figurina Valdivia Decorada.',
					autor: 'Desconocido',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'pieza_usos',
			[
				{
					id_pieza: 1,
					id_uso: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 1,
					id_uso: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 2,
					id_uso: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 3,
					id_uso: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 4,
					id_uso: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 5,
					id_uso: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 6,
					id_uso: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 7,
					id_uso: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 8,
					id_uso: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'pieza_tipos',
			[
				{
					id_pieza: 1,
					id_tipo: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 2,
					id_tipo: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 3,
					id_tipo: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 4,
					id_tipo: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 5,
					id_tipo: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 6,
					id_tipo: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 7,
					id_tipo: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 8,
					id_tipo: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'pieza_procedencias',
			[
				{
					id_pieza: 1,
					id_procedencia: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 2,
					id_procedencia: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 3,
					id_procedencia: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 4,
					id_procedencia: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 5,
					id_procedencia: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 6,
					id_procedencia: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 7,
					id_procedencia: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 8,
					id_procedencia: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			'pieza_dimensiones',
			[
				{
					id_pieza: 1,
					id_dimension: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 1,
					id_dimension: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 2,
					id_dimension: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 2,
					id_dimension: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 3,
					id_dimension: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 3,
					id_dimension: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 4,
					id_dimension: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 4,
					id_dimension: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 5,
					id_dimension: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 5,
					id_dimension: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 6,
					id_dimension: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 6,
					id_dimension: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 7,
					id_dimension: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 7,
					id_dimension: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 8,
					id_dimension: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_pieza: 8,
					id_dimension: 16,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
		await queryInterface.bulkInsert(
			'modelos',
			[
				{
					id_modelo: 1,
					id_pieza: 1,
					id_modelo_imagen: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 2,
					id_pieza: 1,
					id_modelo_imagen: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 3,
					id_pieza: 2,
					id_modelo_imagen: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 4,
					id_pieza: 2,
					id_modelo_imagen: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 5,
					id_pieza: 3,
					id_modelo_imagen: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 6,
					id_pieza: 3,
					id_modelo_imagen: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 7,
					id_pieza: 4,
					id_modelo_imagen: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 8,
					id_pieza: 4,
					id_modelo_imagen: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 9,
					id_pieza: 5,
					id_modelo_imagen: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 10,
					id_pieza: 5,
					id_modelo_imagen: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 11,
					id_pieza: 6,
					id_modelo_imagen: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 12,
					id_pieza: 6,
					id_modelo_imagen: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 13,
					id_pieza: 7,
					id_modelo_imagen: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 14,
					id_pieza: 7,
					id_modelo_imagen: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 15,
					id_pieza: 8,
					id_modelo_imagen: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id_modelo: 16,
					id_pieza: 8,
					id_modelo_imagen: 16,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('tipos', null, {});
		await queryInterface.bulkDelete('usos', null, {});
		await queryInterface.bulkDelete('procedencias', null, {});
		await queryInterface.bulkDelete('piezas', null, {});
		await queryInterface.bulkDelete('dimensiones', null, {});
		await queryInterface.bulkDelete('modelo_imagen', null, {});
		await queryInterface.bulkDelete('pieza_usos', null, {});
		await queryInterface.bulkDelete('pieza_tipos', null, {});
		await queryInterface.bulkDelete('pieza_procedencias', null, {});
		await queryInterface.bulkDelete('pieza_dimensiones', null, {});
		await queryInterface.bulkDelete('modelo', null, {});
	},
};
