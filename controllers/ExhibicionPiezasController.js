const { Sequelize, Op } = require('sequelize');
const Exhibicion_Piezas = require('../models').exhibicion_piezas;
module.exports = {
	async create(req, res) {
		try {
			const exhibicionPieza = await Exhibicion_Piezas.create(req.body);
			return res.status(201).json(exhibicionPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const exhibicionPiezas = await Exhibicion_Piezas.findAll();
			return res.status(200).json(exhibicionPiezas);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const exhibicionPieza = await Exhibicion_Piezas.findByPk(req.params.id);
			if (!exhibicionPieza) {
				return res.status(404).json({ error: 'Exhibicion Pieza not found' });
			}
			return res.status(200).json(exhibicionPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Exhibicion_Piezas.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Exhibicion Pieza not found' });
			}
			const updatedExhibicionPieza = await Exhibicion_Piezas.findByPk(req.params.id);
			return res.status(200).json(updatedExhibicionPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Exhibicion_Piezas.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Exhibicion Pieza not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
