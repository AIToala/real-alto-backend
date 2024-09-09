const { Sequelize, Op } = require('sequelize');
const Tipo_Pieza = require('../models').tipo_piezas;
module.exports = {
	async create(req, res) {
		try {
			const tipoPieza = await Tipo_Pieza.create(req.body);
			return res.status(201).json(tipoPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const tipoPiezas = await Tipo_Pieza.findAll();
			return res.status(200).json(tipoPiezas);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const tipoPieza = await Tipo_Pieza.findByPk(req.params.id);
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
			const [updated] = await Tipo_Pieza.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Tipo Pieza not found' });
			}
			const updatedTipoPieza = await Tipo_Pieza.findByPk(req.params.id);
			return res.status(200).json(updatedTipoPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Tipo_Pieza.destroy({
				where: { id: req.params.id },
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
