const { Sequelize, Op } = require('sequelize');
const Pieza_Dimensiones = require('../models').pieza_dimensiones;
module.exports = {
	async create(req, res) {
		try {
			const piezaDimension = await Pieza_Dimensiones.create(req.body);
			return res.status(201).json(piezaDimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const piezaDimensiones = await Pieza_Dimensiones.findAll();
			return res.status(200).json(piezaDimensiones);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const piezaDimension = await Pieza_Dimensiones.findByPk(req.params.id);
			if (!piezaDimension) {
				return res.status(404).json({ error: 'Pieza Dimension not found' });
			}
			return res.status(200).json(piezaDimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Pieza_Dimensiones.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza Dimension not found' });
			}
			const updatedPiezaDimension = await Pieza_Dimensiones.findByPk(req.params.id);
			return res.status(200).json(updatedPiezaDimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza_Dimensiones.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza Dimension not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
