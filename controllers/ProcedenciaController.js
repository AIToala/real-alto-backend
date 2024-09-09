const { Sequelize, Op } = require('sequelize');
const Procedencia = require('../models').procedencias;
module.exports = {
	async create(req, res) {
		try {
			const procedencia = await Procedencia.create(req.body);
			return res.status(201).json(procedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const procedencias = await Procedencia.findAll();
			return res.status(200).json(procedencias);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const procedencia = await Procedencia.findByPk(req.params.id);
			if (!procedencia) {
				return res.status(404).json({ error: 'Procedencia not found' });
			}
			return res.status(200).json(procedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Procedencia.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Procedencia not found' });
			}
			const updatedProcedencia = await Procedencia.findByPk(req.params.id);
			return res.status(200).json(updatedProcedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Procedencia.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Procedencia not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
