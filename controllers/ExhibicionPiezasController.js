const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Exhibicion_Piezas = require('../models').exhibicion_piezas;
const Exhibiciones = require('../models').exhibiciones;
module.exports = {
	async create(req, res) {
		const { exhibicionData, id_pieza } = req.body;
		if (!exhibicionData || exhibicionData.length === 0 || !id_pieza) {
			return res.status(400).json({ error: 'Exhibicion data and Pieza ID are required' });
		}
		const transaction = await sequelize.transaction(); // Start a new transaction
		try {
			exhibicionData.forEach(async (exhibicion) => {
				const exhibiciones = await Exhibiciones.create(exhibicion, { transaction });
				await Exhibicion_Piezas.create(
					{
						id_pieza: id_pieza,
						id_exhibicion: exhibiciones.id_exhibicion,
					},
					{ transaction }
				);
			});
			await transaction.commit(); // Commit the transaction
			return res.status(201).json({ message: 'Exhibicion Pieza created' });
		} catch (error) {
			await transaction.rollback(); // Rollback the transaction
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const exhibicionPiezas = await Exhibicion_Piezas.findAll();
			return res.status(200).json(exhibicionPiezas);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const exhibicionPieza = await Exhibicion_Piezas.findByPk(parseInt(req.params.id));
			if (!exhibicionPieza) {
				return res.status(404).json({ error: 'Exhibicion Pieza not found' });
			}
			return res.status(200).json(exhibicionPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Exhibicion_Piezas.update(req.body, {
				where: { id_exhibicion_pieza: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Exhibicion Pieza not found' });
			}
			const updatedExhibicionPieza = await Exhibicion_Piezas.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedExhibicionPieza);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Exhibicion_Piezas.destroy({
				where: { id_exhibicion_pieza: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Exhibicion Pieza not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
