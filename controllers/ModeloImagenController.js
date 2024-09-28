const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Modelos_Imagen = require('../models').modelo_imagen;
module.exports = {
	async create(req, res) {
		try {
			const modeloMetadata = await Modelos_Imagen.create(req.body);
			return res.status(201).json(modeloMetadata);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const modeloMetadata = await Modelos_Imagen.findAll();
			return res.status(200).json(modeloMetadata);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const modeloMetadata = await Modelos_Imagen.findByPk(parseInt(req.params.id));
			if (!modeloMetadata) {
				return res.status(404).json({ error: 'Modelo Metadata not found' });
			}
			return res.status(200).json(modeloMetadata);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Modelos_Imagen.update(req.body, {
				where: { id_modelo_imagen: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Modelo Metadata not found' });
			}
			const updatedModeloMetadata = await Modelos_Imagen.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedModeloMetadata);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Modelos_Imagen.destroy({
				where: { id_modelo_imagen: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Modelo Metadata not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
