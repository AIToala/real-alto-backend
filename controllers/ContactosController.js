const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Contactos = require('../models').contactos;

module.exports = {
	async create(req, res) {
		try {
			const contacto = await Contactos.create(req.body);
			return res.status(201).json(contacto);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const contactos = await Contactos.findAll({
				attributes: { exclude: [] },
			});
			return res.status(200).json(contactos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const contacto = await Contactos.findByPk(req.params.id);
			if (!contacto) {
				return res.status(404).json({ error: 'Contacto not found' });
			}
			return res.status(200).json(contacto);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Contactos.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Contacto not found' });
			}
			const updatedContacto = await Contactos.findByPk(req.params.id);
			return res.status(200).json(updatedContacto);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Contactos.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Contacto not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
