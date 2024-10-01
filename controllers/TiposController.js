const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Tipos = require('../models').tipos;
module.exports = {
	async create(req, res) {
		try {
			const { nombre_tipo, descripcion } = req.body;
			const nombre = nombre_tipo.trim().replace(/\s+/g, '-');
			const tipoPieza = await Tipos.create({
				nombre_tipo: nombre,
				descripcion,
			});
			return res.status(201).json(tipoPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		const filters = {};
		try {
			// Extract filters from `req.query`
			if (req.query.id_tipo && req.query.id_tipo !== '') filters.id_tipo = req.query.id_tipo;
			if (req.query.busqueda && req.query.busqueda !== '') filters.busqueda = req.query.busqueda;

			// Dynamically build the `where` clause
			const whereConditions = [];
			if (filters.id_tipo) whereConditions.push({ id_tipo: { [Op.eq]: filters.id_tipo } });
			if (filters.busqueda) {
				whereConditions.push(
					{ nombre_tipo: { [Op.like]: `%${filters.busqueda}%` } },
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
					const { count, rows } = await Tipos.findAndCountAll({
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
					const { count, rows } = await Tipos.findAndCountAll({
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
					const rows = await Tipos.findAll({
						where: {
							[Op.and]: [{ [Op.or]: whereConditions }],
						},
					});
					return res.status(200).json(rows);
				} else {
					const rows = await Tipos.findAll();
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
			const tipoPieza = await Tipos.findByPk(parseInt(req.params.id));
			if (!tipoPieza) {
				return res.status(404).json({ error: 'Tipo Pieza not found' });
			}
			return res.status(200).json(tipoPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Tipos.update(req.body, {
				where: { id_tipo: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Tipo Pieza not found' });
			}
			const updatedTipoPieza = await Tipos.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedTipoPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Tipos.destroy({
				where: { id_tipo: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Tipo Pieza not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
