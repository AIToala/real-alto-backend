const { Sequelize, Op } = require('sequelize');
const Dimensiones = require('../models').dimensiones;
module.exports = {
	async create(req, res) {
		try {
			const dimension = await Dimensiones.create(req.body);
			return res.status(201).json(dimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const dimensiones = await Dimensiones.findAll();
			return res.status(200).json(dimensiones);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const dimension = await Dimensiones.findByPk(req.params.id);
			if (!dimension) {
				return res.status(404).json({ error: 'Dimension not found' });
			}
			return res.status(200).json(dimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Dimensiones.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Dimension not found' });
			}
			const updatedDimension = await Dimensiones.findByPk(req.params.id);
			return res.status(200).json(updatedDimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Dimensiones.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Dimension not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
