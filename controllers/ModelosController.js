const { Sequelize, Op } = require('sequelize');
const Modelos = require('../models').modelos;
const Modelo_Metadata = require('../models').modelo_metadata;

module.exports = {
	async create(req, res) {
		try {
			if (!req.body.metadata) {
				return res.status(400).json({ error: 'Metadata is required' });
			} else {
				const metadata = await Modelo_Metadata.create(req.body.metadata);
				req.body.id_modelo_metadata = metadata.id;
			}
			const modelo = await Modelos.create(req.body);
			return res.status(201).json(modelo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const modelos = await Modelos.findAll();
			return res.status(200).json(modelos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const modelo = await Modelos.findByPk(req.params.id);
			if (!modelo) {
				return res.status(404).json({ error: 'Modelo not found' });
			}
			return res.status(200).json(modelo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Modelos.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Modelo not found' });
			}
			const updatedModelo = await Modelos.findByPk(req.params.id);
			return res.status(200).json(updatedModelo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Modelos.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Modelo not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
