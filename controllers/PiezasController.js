const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Pieza = require('../models').piezas;
const pieza_usos = require('../models').pieza_usos;
const tipo_usos = require('../models').tipo_usos;
const tipo_piezas = require('../models').tipo_piezas;
const modelos = require('../models').modelos;
const modelo_metadatas = require('../models').modelo_metadata;
const procedencias = require('../models').procedencias;
const pieza_dimensiones = require('../models').pieza_dimensiones;
const dimensiones = require('../models').dimensiones;
const exhibicion_piezas = require('../models').exhibicion_piezas;
const exhibiciones = require('../models').exhibiciones;

module.exports = {
	async create(req, res) {
		const {
			piezaData,
			piezaDimensionData,
			piezaUsoData,
			tipoPiezaData,
			modeloData,
			procedenciaData,
			exhibicionPiezaData,
		} = req.body;
		if (!piezaData) {
			return res.status(400).json({ error: 'Pieza data is required' });
		}
		if (!piezaDimensionData) {
			return res.status(400).json({ error: 'Pieza dimension data is required' });
		}
		if (!piezaUsoData) {
			return res.status(400).json({ error: 'Pieza uso data is required' });
		}
		if (!tipoPiezaData) {
			return res.status(400).json({ error: 'Tipo pieza data is required' });
		}
		/* if (!modeloData) {
			return res.status(400).json({ error: 'Modelo data is required' });
		} */
		if (!procedenciaData) {
			return res.status(400).json({ error: 'Procedencia data is required' });
		}
		if (!exhibicionPiezaData) {
			return res.status(400).json({ error: 'Exhibicion pieza data is required' });
		}

		const transaction = await sequelize.transaction(); // Start a new transaction
		try {
			const data = piezaData[0];

			const tipoPieza = await tipo_piezas.create(tipoPiezaData[0], { transaction });
			/* const modelo = await modelos.create(modeloData, { transaction }); */
			const procedencia = await procedencias.create(procedencias[0], { transaction });

			const pieza = await Pieza.create(
				{
					nombre_pieza: data.nombre_pieza,
					descripcion: data.descripcion,
					descripcion_corta: data.descripcion_corta,
					activo: data.activo || 1,
					id_procedencia: procedencia.id_procedencia,
					id_tipo_pieza: tipoPieza.id_tipo_pieza,
				},
				{
					transaction,
				}
			);
			// Create dimensiones using Promise.all
			const dimensionesResults = await Promise.all(
				piezaDimensionData.map(async (data) => {
					const dimension = await dimensiones.create(
						{
							valor_medida: data.valor_medida,
							unidad_medida: data.unidad_medida,
						},
						{ transaction }
					);

					return pieza_dimensiones.create(
						{
							id_dimension: dimension.id_dimension,
							id_pieza: pieza.id_pieza,
						},
						{ transaction }
					);
				})
			);

			// Create usos using Promise.all
			const usosResults = await Promise.all(
				piezaUsoData.map(async (uso) => {
					const tipoUso = await tipo_usos.create(
						{
							nombre_tipo_uso: uso.nombre_tipo_uso,
							descripcion: uso.descripcion,
						},
						{ transaction }
					);

					return pieza_usos.create(
						{
							id_tipo_uso: tipoUso.id_tipo_uso,
							id_pieza: pieza.id_pieza,
						},
						{ transaction }
					);
				})
			);

			// Create exhibiciones using Promise.all
			const exhibicionesResults = await Promise.all(
				exhibicionPiezaData.map(async (data) => {
					const exhibicion = await exhibiciones.create(
						{
							nombre_exhibicion: data.nombre_exhibicion,
							descripcion: data.descripcion,
						},
						{ transaction }
					);

					return exhibicion_piezas.create(
						{
							id_exhibicion: exhibicion.id_exhibicion,
							id_pieza: pieza.id_pieza,
						},
						{ transaction }
					);
				})
			);

			await pieza.update(
				{
					id_pieza_uso: usosResults[0]?.id_pieza_uso || null, // Assuming you want to use the first uso
					id_pieza_dimension: dimensionesResults[0]?.id_pieza_dimension || null, // Assuming you want to use the first dimension
					id_exhibicion_pieza: exhibicionesResults[0]?.id_exhibicion || null, // Assuming you want to use the first exhibicion
				},
				{ transaction }
			);

			await pieza.save(); // Save the updated pieza

			await transaction.commit(); // Commit the transaction

			return res.status(201).json({
				message: 'Pieza created successfully',
				pieza,
			});
		} catch (error) {
			await transaction.rollback();
			console.error(error);
			return res.status(500).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		const filters = {};
		try {
			// Extract filters from `req.query`
			if (req.query.id_procedencia) filters.id_procedencia = req.query.id_procedencia;
			if (req.query.id_pieza_uso) filters.id_pieza_uso = req.query.id_pieza_uso;
			if (req.query.id_tipo_pieza) filters.id_tipo_pieza = req.query.id_tipo_pieza;
			if (req.query.id_modelo) filters.id_modelo = req.query.id_modelo;
			if (req.query.id_pieza_dimension) filters.id_pieza_dimension = req.query.id_pieza_dimension;
			if (req.query.id_exhibicion_pieza) filters.id_exhibicion_pieza = req.query.id_exhibicion_pieza;
			if (req.query.busqueda) filters.busqueda = req.query.busqueda;
			if (req.query.activo) filters.activo = req.query.activo;

			// Extract include options
			const include = [
				...(req.query.with_pieza_dimension ? [{ model: pieza_dimensiones, as: 'pieza_dimension' }] : []),
				...(req.query.with_pieza_uso ? [{ model: pieza_usos, as: 'pieza_uso' }] : []),
				...(req.query.with_tipo_pieza ? [{ model: tipo_piezas, as: 'tipo_pieza' }] : []),
				...(req.query.with_modelo ? [{ model: modelos, as: 'modelo' }] : []),
				...(req.query.with_procedencia ? [{ model: procedencias, as: 'procedencia' }] : []),
				...(req.query.with_exhibicion_pieza ? [{ model: exhibicion_piezas, as: 'exhibicion_pieza' }] : []),
			];

			// Dynamically build the `where` clause
			const whereConditions = [];
			if (filters.id_procedencia)
				whereConditions.push({ id_procedencia: { [Op.like]: `%${filters.id_procedencia}%` } });
			if (filters.id_pieza_uso) whereConditions.push({ id_pieza_uso: { [Op.like]: `%${filters.id_pieza_uso}%` } });
			if (filters.id_tipo_pieza) whereConditions.push({ id_tipo_pieza: { [Op.like]: `%${filters.id_tipo_pieza}%` } });
			if (filters.id_modelo) whereConditions.push({ id_modelo: { [Op.like]: `%${filters.id_modelo}%` } });
			if (filters.id_pieza_dimension)
				whereConditions.push({ id_pieza_dimension: { [Op.like]: `%${filters.id_pieza_dimension}%` } });
			if (filters.id_exhibicion_pieza)
				whereConditions.push({ id_exhibicion_pieza: { [Op.like]: `%${filters.id_exhibicion_pieza}%` } });
			if (filters.activo) whereConditions.push({ activo: { [Op.like]: `%${filters.activo}%` } });
			if (filters.busqueda) {
				whereConditions.push(
					{ nombre_pieza: { [Op.like]: `%${filters.busqueda}%` } },
					{ descripcion: { [Op.like]: `%${filters.busqueda}%` } },
					{ descripcion_corta: { [Op.like]: `%${filters.busqueda}%` } }
				);
			}

			const paginated = req.query.paginated === 'true' ? true : false;
			const page = parseInt(req.query.page) || 1;
			const pageSize = parseInt(req.query.pageSize) || 10;
			const limit = pageSize;
			const offset = (page - 1) * pageSize;

			if (paginated) {
				const { count, rows } = await Pieza.findAndCountAll({
					include,
					where: whereConditions.length > 0 ? { [Op.or]: whereConditions } : undefined,
					limit,
					offset,
				});
				return res
					.status(200)
					.json({ total: count, totalPages: Math.ceil(count / pageSize), currentPage: page, pageSize, data: rows });
			} else {
				const rows = await Pieza.findAll({
					include,
					where: whereConditions.length > 0 ? { [Op.or]: whereConditions } : undefined,
				});
				return res.status(200).json(rows);
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const pieza = await Pieza.findByPk(req.params.id);
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
			const [updated] = await Pieza.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza not found' });
			}
			const updatedPieza = await Pieza.findByPk(req.params.id);
			return res.status(200).json(updatedPieza);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza.destroy({
				where: { id: req.params.id },
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
