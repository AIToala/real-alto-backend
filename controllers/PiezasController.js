const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Pieza = require('../models').piezas;
const pieza_usos = require('../models').pieza_usos;
const usos = require('../models').usos;
const pieza_tipos = require('../models').pieza_tipos;
const tipos = require('../models').tipos;
const modelos = require('../models').modelos;
const modelo_imagen = require('../models').modelo_imagen;
const pieza_procedencias = require('../models').pieza_procedencias;
const procedencias = require('../models').procedencias;
const pieza_dimensiones = require('../models').pieza_dimensiones;
const dimensiones = require('../models').dimensiones;

module.exports = {
	async create(req, res) {
		const { piezaData, piezaTiposData, piezaProcedenciasData, piezaDimensionData, piezaUsoData, modeloData } = req.body;
		if (!piezaData) {
			return res.status(400).json({ error: 'Pieza data is required' });
		}
		if (!piezaTiposData) {
			return res.status(400).json({ error: 'Tipo pieza id is required' });
		}
		if (!piezaProcedenciasData) {
			return res.status(400).json({ error: 'Procedencia data is required' });
		}
		if (!piezaDimensionData) {
			return res.status(400).json({ error: 'Pieza dimension data is required' });
		}
		if (!piezaUsoData) {
			return res.status(400).json({ error: 'Pieza uso data is required' });
		}
		if (!modeloData) {
			return res.status(400).json({ error: 'Modelo data is required' });
		}

		const t = await sequelize.transaction(); // Start a new transaction
		try {
			const nombre_pieza = piezaData.nombre_pieza.trim().replace(/\s+/g, '-');

			const pieza = await Pieza.create(
				{
					nombre_pieza: nombre_pieza,
					descripcion: piezaData.descripcion,
					descripcion_corta: piezaData.descripcion_corta,
					activo: piezaData.activo || 1,
				},
				{
					transaction: t,
				}
			);
			const id_pieza = pieza.id_pieza;

			await Promise.all(
				piezaTiposData.map(async (tipo) => {
					const tipo_existe = await tipos.findByPk(tipo.id_tipo);
					if (!tipo_existe) {
						await t.rollback();
						return res.status(400).json({
							error: 'Tipo de pieza no existe.',
						});
					}

					await pieza_tipos.create(
						{
							id_pieza: id_pieza,
							id_tipo: tipo.id_tipo,
						},
						{ transaction: t }
					);
				})
			);

			await Promise.all(
				piezaProcedenciasData.map(async (procedencia) => {
					const procedencia_existe = await procedencias.findByPk(procedencia.id_procedencia);
					if (!procedencia_existe) {
						await t.rollback();
						return res.status(400).json({
							error: 'Procedencia de pieza no existe.',
						});
					}
					await pieza_procedencias.create(
						{
							id_pieza: id_pieza,
							id_procedencia: procedencia.id_procedencia,
						},
						{ transaction: t }
					);
				})
			);

			await Promise.all(
				piezaDimensionData.map(async (dimension) => {
					const newDimension = await dimensiones.create(
						{
							valor_medida: dimension.valor_medida,
							unidad_medida: dimension.unidad_medida,
							descripcion: dimension.descripcion,
						},
						{ transaction: t }
					);
					await pieza_dimensiones.create(
						{
							id_pieza: id_pieza,
							id_dimension: newDimension.id_dimension,
						},
						{ transaction: t }
					);
				})
			);

			await Promise.all(
				piezaUsoData.map(async (uso) => {
					const uso_existe = await usos.findByPk(uso.id_uso);
					if (!uso_existe) {
						await t.rollback();
						return res.status(400).json({
							error: 'Uso de pieza no existe.',
						});
					}
					await pieza_usos.create(
						{
							id_pieza: id_pieza,
							id_uso: uso.id_uso,
						},
						{ transaction: t }
					);
				})
			);

			await Promise.all(
				modeloData.map(async (modelo) => {
					const newImagen = await modelo_imagen.create(
						{
							nombre_modelo: modelo.nombre_modelo,
							path_archivo: modelo.path_archivo,
							tipo_archivo: modelo.tipo_archivo,
							descripcion: modelo.descripcion,
							autor: 'admin',
						},
						{ transaction: t }
					);
					await modelos.create(
						{
							id_pieza: id_pieza,
							id_modelo_imagen: newImagen.id_modelo_imagen,
						},
						{ transaction: t }
					);
				})
			);

			await t.commit(); // Commit the transaction

			return res.status(201).json({
				message: 'Pieza created successfully',
				pieza,
			});
		} catch (error) {
			await t.rollback();
			console.error(error);
			return res.status(500).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		const filters = {};
		try {
			// Extract filters from `req.query`
			if (req.query.id_pieza) filters.id_pieza = req.query.id_pieza;
			if (req.query.id_procedencia && req.query.id_procedencia !== '')
				filters.id_procedencia = req.query.id_procedencia;
			if (req.query.id_uso && req.query.id_uso !== '') filters.id_uso = req.query.id_uso;
			if (req.query.id_tipo && req.query.id_tipo !== '') filters.id_tipo = req.query.id_tipo;
			if (req.query.id_pieza_dimension && req.query.id_pieza_dimension !== '')
				filters.id_pieza_dimension = req.query.id_pieza_dimension;
			if (req.query.nombre_tipo && req.query.nombre_tipo !== '') filters.nombre_tipo = req.query.nombre_tipo;
			if (req.query.origen && req.query.origen !== '') filters.origen = req.query.origen;
			if (req.query.nivel_cronologico && req.query.nivel_cronologico !== '')
				filters.nivel_cronologico = req.query.nivel_cronologico;
			if (req.query.nombre_uso && req.query.nombre_uso !== '') filters.nombre_uso = req.query.nombre_uso;
			if (req.query.busqueda && req.query.busqueda !== '') filters.busqueda = req.query.busqueda;
			if (req.query.activo) filters.activo = req.query.activo;

			// Extract include options
			const include = [
				...(req.query.with_modelos
					? [
							{
								association: 'modelos',
								include: [
									{
										association: 'modelo_imagen',
										required: true,
									},
								],
								required: true,
							},
						]
					: []),
				...(req.query.with_pieza_dimension
					? [
							{
								association: 'pieza_dimensiones',
								include: [
									{
										association: 'dimensiones',
										required: true,
									},
								],
								required: true,
							},
						]
					: []),
				...(req.query.with_pieza_usos
					? [
							{
								association: 'pieza_usos',
								...(filters.id_uso && { where: { id_uso: filters.id_uso }, required: true }),
								include: [
									{
										association: 'uso',
										...(filters.nombre_uso && {
											where: { nombre_uso: filters.nombre_uso },
										}),
										required: true,
									},
								],
								required: true,
							},
						]
					: []),
				...(req.query.with_pieza_tipos
					? [
							{
								association: 'pieza_tipos',
								...(filters.id_tipo && { where: { id_tipo: filters.id_tipo }, required: true }),
								include: [
									{
										association: 'tipo',
										...(filters.nombre_tipo && {
											where: { nombre_tipo: filters.nombre_tipo },
										}),
										required: true,
									},
								],
								required: true,
							},
						]
					: []),
				...(req.query.with_pieza_procedencias
					? [
							{
								association: 'pieza_procedencias',
								...(filters.id_procedencia && {
									where: {
										id_procedencia: filters.id_procedencia,
									},
								}),
								include: [
									{
										association: 'procedencia',
										...(filters.origen && { where: { origen: filters.origen } }),
										...(filters.nivel_cronologico && {
											where: { nivel_cronologico: filters.nivel_cronologico },
										}),
										required: true,
									},
								],
								required: true,
							},
						]
					: []),
			];

			// Dynamically build the `where` clause
			const whereConditions = [];
			if (filters.busqueda) {
				whereConditions.push(
					{ id_pieza: { [Op.like]: `%${filters.busqueda}%` } },
					{ nombre_pieza: { [Op.like]: `%${filters.busqueda}%` } },
					{ descripcion: { [Op.like]: `%${filters.busqueda}%` } },
					{ descripcion_corta: { [Op.like]: `%${filters.busqueda}%` } }
				);
			}
			if (filters.id_pieza) whereConditions.push({ id_pieza: { [Op.eq]: filters.id_pieza } });

			const paginated = parseInt(req.query.paginated) === 1 ? true : false;
			const page = parseInt(req.query.page) || 1;
			const pageSize = parseInt(req.query.pageSize) || 10;
			const offset = (page - 1) * pageSize;
			const limit = pageSize;

			const where =
				whereConditions.length > 0
					? { [Op.and]: [{ activo: filters.activo ?? 1 }, { [Op.or]: whereConditions }] }
					: { activo: filters.activo ?? 1 };

			if (paginated) {
				const { count, rows } = await Pieza.findAndCountAll({
					include,
					where,
					distinct: true,
					subQuery: false,
					logging: console.log, // Add this line
				});

				const paginatedRows = rows.slice(offset, offset + limit);

				return res.status(200).json({
					total: count,
					totalPages: Math.ceil(count / pageSize),
					currentPage: page,
					pageSize,
					data: paginatedRows,
				});
			} else {
				const rows = await Pieza.findAll({
					include,
					where,
				});
				return res.status(200).json(rows);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Algo salio mal. Intentelo nuevamente en unos momentos.' });
		}
	},

	async findOne(req, res) {
		try {
			const id = parseInt(req.params.id);
			const pieza = await Pieza.findAll({
				include: [
					{
						association: 'pieza_dimension',
						include: [
							{
								association: 'dimensiones',
							},
						],
					},
					{
						association: 'pieza_uso',
						include: [
							{
								association: 'uso',
							},
						],
					},
					{
						association: 'pieza_tipo',
						include: [
							{
								association: 'tipo',
							},
						],
					},
					{
						association: 'modelo',
						include: [
							{
								association: 'modelo_imagen',
							},
						],
					},
					{
						association: 'pieza_procedencia',
						include: [{ model: 'procedencias', as: 'procedencia' }],
					},
				],
				where: {
					[Op.and]: [{ id_pieza: id }],
				},
			});
			if (!pieza) {
				return res.status(404).json({ error: 'Pieza not found' });
			}
			return res.status(200).json(pieza);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const id = parseInt(req.params.id);
			const [updated] = await Pieza.update(req.body, {
				where: { id_pieza: id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza not found' });
			}
			const updatedPieza = await Pieza.findByPk(id);
			return res.status(200).json(updatedPieza);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const id = parseInt(req.params.id);
			const deleted = await Pieza.destroy({
				where: { id_pieza: id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
};
