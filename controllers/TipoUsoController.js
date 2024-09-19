const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Tipo_Uso = require('../models').tipo_usos;
module.exports = {
	async create(req, res) {
		try {
			const tipoUso = await Tipo_Uso.create(req.body);
			return res.status(201).json(tipoUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const tipoUsos = await Tipo_Uso.findAll();
			return res.status(200).json(tipoUsos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const tipoUso = await Tipo_Uso.findByPk(req.params.id);
			if (!tipoUso) {
				return res.status(404).json({ error: 'Tipo Uso not found' });
			}
			return res.status(200).json(tipoUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Tipo_Uso.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Tipo Uso not found' });
			}
			const updatedTipoUso = await Tipo_Uso.findByPk(req.params.id);
			return res.status(200).json(updatedTipoUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Tipo_Uso.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Tipo Uso not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
