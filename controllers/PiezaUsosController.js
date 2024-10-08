const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Pieza_Usos = require('../models').pieza_usos;
const Usos = require('../models').usos;
module.exports = {
	async create(req, res) {
		const { usoData, id_pieza } = req.body;
		if (!usoData || usoData.length === 0 || !id_pieza) {
			return res.status(400).json({ error: 'Uso data is required' });
		}
		const transaction = await sequelize.transaction(); // Start a new transaction
		try {
			usoData.forEach(async (uso) => {
				const tipoUsos = await Usos.create(uso, { transaction });
				await Pieza_Usos.create(
					{
						id_pieza: id_pieza,
						id_uso: tipoUsos.id_uso,
					},
					{ transaction }
				);
			});
			await transaction.commit(); // Commit the transaction
			return res.status(201).json({ message: 'Pieza Uso created' });
		} catch (error) {
			await transaction.rollback(); // Rollback the transaction
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const piezaUsos = await Pieza_Usos.findAll({
				include: [
					{
						model: Usos,
						as: 'uso',
						required: true,
					},
					{
						model: 'piezas',
						as: 'pieza',
						required: true,
					},
				],
			});
			return res.status(200).json(piezaUsos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const piezaUso = await Pieza_Usos.findByPk(parseInt(req.params.id));
			if (!piezaUso) {
				return res.status(404).json({ error: 'Pieza Uso not found' });
			}
			return res.status(200).json(piezaUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Pieza_Usos.update(req.body, {
				where: { id_pieza_uso: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza Uso not found' });
			}
			const updatedPiezaUso = await Pieza_Usos.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedPiezaUso);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza_Usos.destroy({
				where: { id_pieza_uso: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza Uso not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
