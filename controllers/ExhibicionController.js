const { Sequelize, Op } = require('sequelize');
const Exhibicion = require('../models').exhibiciones;
module.exports = {
	async create(req, res) {
		try {
			const exhibicion = await Exhibicion.create(req.body);
			return res.status(201).json(exhibicion);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const exhibiciones = await Exhibicion.findAll();
			return res.status(200).json(exhibiciones);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const exhibicion = await Exhibicion.findByPk(req.params.id);
			if (!exhibicion) {
				return res.status(404).json({ error: 'Exhibicion not found' });
			}
			return res.status(200).json(exhibicion);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Exhibicion.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Exhibicion not found' });
			}
			const updatedExhibicion = await Exhibicion.findByPk(req.params.id);
			return res.status(200).json(updatedExhibicion);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Exhibicion.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Exhibicion not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
