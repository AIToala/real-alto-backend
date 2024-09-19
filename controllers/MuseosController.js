const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Museos = require('../models').museos;
module.exports = {
	async create(req, res) {
		try {
			const museo = await Museos.create(req.body);
			return res.status(201).json(museo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const museos = await Museos.findAll();
			return res.status(200).json(museos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const museo = await Museos.findByPk(req.params.id);
			if (!museo) {
				return res.status(404).json({ error: 'Museo not found' });
			}
			return res.status(200).json(museo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Museos.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Museo not found' });
			}
			const updatedMuseo = await Museos.findByPk(req.params.id);
			return res.status(200).json(updatedMuseo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Museos.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Museo not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
