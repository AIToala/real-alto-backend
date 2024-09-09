const { Sequelize, Op } = require('sequelize');
const Pieza = require('../models').piezas;
module.exports = {
	async working(req, res) {
		res.status(200).send({
			status: 'UP',
			message: 'The API is up and running.',
		});
	},
	async create(req, res) {
		try {
			const pieza = await Pieza.create(req.body);
			return res.status(201).json(pieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const pieza = await Pieza.findAll();
			return res.status(200).json(pieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
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
			return res.status(400).json({ error: error.message });
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
			return res.status(400).json({ error: error.message });
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
			return res.status(400).json({ error: error.message });
		}
	},
};
