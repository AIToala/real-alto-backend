const { Sequelize, Op } = require('sequelize');
const Pieza_Usos = require('../models').pieza_usos;
module.exports = {
	async create(req, res) {
		try {
			const piezaUso = await Pieza_Usos.create(req.body);
			return res.status(201).json(piezaUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const piezaUsos = await Pieza_Usos.findAll();
			return res.status(200).json(piezaUsos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const piezaUso = await Pieza_Usos.findByPk(req.params.id);
			if (!piezaUso) {
				return res.status(404).json({ error: 'Pieza Uso not found' });
			}
			return res.status(200).json(piezaUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Pieza_Usos.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza Uso not found' });
			}
			const updatedPiezaUso = await Pieza_Usos.findByPk(req.params.id);
			return res.status(200).json(updatedPiezaUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza_Usos.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza Uso not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
