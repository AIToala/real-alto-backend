const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Procedencia = require('../models').procedencias;
module.exports = {
	async create(req, res) {
		try {
			const procedencia = await Procedencia.create(req.body);
			return res.status(201).json(procedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		const filters = {};
		try {
			// Extract filters from `req.query`
			if (req.query.id_procedencia && req.query.id_procedencia !== '')
				filters.id_procedencia = req.query.id_procedencia;
			if (req.query.busqueda && req.query.busqueda !== '') filters.busqueda = req.query.busqueda;
			if (req.query.only_origen && req.query.only_origen !== '') filters.only_origen = req.query.only_origen;
			if (req.query.origen && req.query.origen !== '') filters.origen = req.query.origen;

			// Dynamically build the `where` clause
			const whereConditions = [];
			if (filters.id_procedencia) whereConditions.push({ id_procedencia: { [Op.eq]: filters.id_procedencia } });
			if (filters.busqueda) {
				whereConditions.push(
					{ periodo_inicio: { [Op.like]: `%${filters.busqueda}%` } },
					{ periodo_fin: { [Op.like]: `%${filters.busqueda}%` } },
					{ descripcion: { [Op.like]: `%${filters.busqueda}%` } },
					{ origen: { [Op.like]: `%${filters.busqueda}%` } }
				);
			}
			if (filters.origen) {
				whereConditions.push({ origen: { [Op.eq]: filters.origen } });
			}

			const paginated = parseInt(req.query.paginated) === 1 ? true : false;
			const page = parseInt(req.query.page) || 1;
			const pageSize = parseInt(req.query.pageSize) || 10;
			const limit = pageSize;
			const offset = (page - 1) * pageSize;

			if (paginated) {
				if (whereConditions.length > 0) {
					const { count, rows } = await Procedencia.findAndCountAll({
						where: {
							[Op.and]: [{ [Op.or]: whereConditions }],
						},
						limit,
						offset,
					});
					return res
						.status(200)
						.json({ total: count, totalPages: Math.ceil(count / pageSize), currentPage: page, pageSize, data: rows });
				} else {
					const { count, rows } = await Procedencia.findAndCountAll({
						limit,
						offset,
					});
					return res.status(200).json({
						total: count,
						totalPages: Math.ceil(count / pageSize),
						currentPage: page,
						pageSize,
						data: rows,
					});
				}
			} else {
				if (whereConditions.length > 0) {
					const rows = await Procedencia.findAll({
						...(filters.only_origen && {
							attributes: [[sequelize.fn('DISTINCT', sequelize.col('origen')), ['origen']]],
						}),
						where: {
							[Op.and]: [{ [Op.or]: whereConditions }],
						},
						...(!filters.only_origen && {
							order: [
								['origen', 'ASC'],
								['nivel_cronologico', 'DESC'],
							],
						}),
					});
					return res.status(200).json(rows);
				} else {
					const rows = await Procedencia.findAll({
						...(filters.only_origen && { attributes: [[sequelize.fn('DISTINCT', sequelize.col('origen')), 'origen']] }),
						...(!filters.only_origen && {
							order: [
								['origen', 'ASC'],
								['nivel_cronologico', 'DESC'],
							],
						}),
					});
					return res.status(200).json(rows);
				}
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: 'Algo salio mal. Intentelo nuevamente en unos momentos.' });
		}
	},

	async findOne(req, res) {
		try {
			const procedencia = await Procedencia.findByPk(parseInt(req.params.id));
			if (!procedencia) {
				return res.status(404).json({ error: 'Procedencia not found' });
			}
			return res.status(200).json(procedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Procedencia.update(req.body, {
				where: { id_procedencia: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Procedencia not found' });
			}
			const updatedProcedencia = await Procedencia.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedProcedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Procedencia.destroy({
				where: { id_procedencia: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Procedencia not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
