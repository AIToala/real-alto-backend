const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Pieza_Procedencias = require('../models').pieza_procedencias;
const Procedencias = require('../models').procedencias;
module.exports = {
	async create(req, res) {
		const { procedenciaData, id_pieza } = req.body;
		if (!procedenciaData || procedenciaData.length === 0 || !id_pieza) {
			return res.status(400).json({ error: 'Uso data is required' });
		}
		const transaction = await sequelize.transaction(); // Start a new transaction
		try {
			procedenciaData.forEach(async (procedencia) => {
				const procedencias = await Procedencias.create(procedencia, { transaction });
				await Pieza_Procedencias.create(
					{
						id_pieza: id_pieza,
						id_procedencia: procedencias.id_procedencia,
					},
					{ transaction }
				);
			});
			await transaction.commit(); // Commit the transaction
			return res.status(201).json({ message: 'Pieza Procedencia created' });
		} catch (error) {
			await transaction.rollback(); // Rollback the transaction
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const piezaProcedencias = await Pieza_Procedencias.findAll({
				include: [
					{
						model: Procedencias,
						as: 'procedencia',
						required: true,
					},
					{
						model: 'piezas',
						as: 'pieza',
						required: true,
					},
				],
			});
			return res.status(200).json(piezaProcedencias);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const piezaProcedencia = await Pieza_Procedencias.findByPk(parseInt(req.params.id));
			if (!piezaProcedencia) {
				return res.status(404).json({ error: 'Pieza Procedencia not found' });
			}
			return res.status(200).json(piezaProcedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Pieza_Procedencias.update(req.body, {
				where: { id_pieza_procedencia: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza Procedencia not found' });
			}
			const updatedPiezaProcedencia = await Pieza_Procedencias.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedPiezaProcedencia);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza_Procedencias.destroy({
				where: { id_pieza_procedencia: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza Procedencia not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
