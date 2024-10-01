const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Usos = require('../models').usos;
module.exports = {
	async create(req, res) {
		try {
			const { nombre_uso, descripcion } = req.body;
			const nombre = nombre_uso.trim().replace(/\s+/g, '-');
			const tipoUso = await Usos.create({
				nombre_uso: nombre,
				descripcion,
			});
			return res.status(201).json(tipoUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		const filters = {};
		try {
			// Extract filters from `req.query`
			if (req.query.id_uso && req.query.id_uso !== '') filters.id_uso = req.query.id_uso;
			if (req.query.busqueda && req.query.busqueda !== '') filters.busqueda = req.query.busqueda;

			// Dynamically build the `where` clause
			const whereConditions = [];
			if (filters.id_uso) whereConditions.push({ id_uso: { [Op.eq]: filters.id_uso } });
			if (filters.busqueda) {
				whereConditions.push(
					{ nombre_uso: { [Op.like]: `%${filters.busqueda}%` } },
					{ descripcion: { [Op.like]: `%${filters.busqueda}%` } }
				);
			}
			const paginated = parseInt(req.query.paginated) === 1 ? true : false;
			const page = parseInt(req.query.page) || 1;
			const pageSize = parseInt(req.query.pageSize) || 10;
			const limit = pageSize;
			const offset = (page - 1) * pageSize;

			if (paginated) {
				if (whereConditions.length > 0) {
					const { count, rows } = await Usos.findAndCountAll({
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
					const { count, rows } = await Usos.findAndCountAll({
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
					const rows = await Usos.findAll({
						where: {
							[Op.and]: [{ [Op.or]: whereConditions }],
						},
					});
					return res.status(200).json(rows);
				} else {
					const rows = await Usos.findAll();
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
			const tipoUso = await Usos.findByPk(parseInt(req.params.id));
			if (!tipoUso) {
				return res.status(404).json({ error: 'Tipo Uso not found' });
			}
			return res.status(200).json(tipoUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Usos.update(req.body, {
				where: { id_uso: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Tipo Uso not found' });
			}
			const updatedTipoUso = await Usos.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedTipoUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Usos.destroy({
				where: { id_uso: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Tipo Uso not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
