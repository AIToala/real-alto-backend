const { Sequelize, Op } = require('sequelize');
const Museo_Contactos = require('../models').museo_contactos;
module.exports = {
	async create(req, res) {
		try {
			const museoContacto = await Museo_Contactos.create(req.body);
			return res.status(201).json(museoContacto);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const museoContactos = await Museo_Contactos.findAll();
			return res.status(200).json(museoContactos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const museoContacto = await Museo_Contactos.findByPk(req.params.id);
			if (!museoContacto) {
				return res.status(404).json({ error: 'Museo Contacto not found' });
			}
			return res.status(200).json(museoContacto);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Museo_Contactos.update(req.body, {
				where: { id: req.params.id },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Museo Contacto not found' });
			}
			const updatedMuseoContacto = await Museo_Contactos.findByPk(req.params.id);
			return res.status(200).json(updatedMuseoContacto);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Museo_Contactos.destroy({
				where: { id: req.params.id },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Museo Contacto not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
