const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Pieza_Tipos = require('../models').pieza_tipos;
const Tipos = require('../models').tipos;
module.exports = {
	async create(req, res) {
		const { tipoData, id_pieza } = req.body;
		if (!tipoData || tipoData.length === 0 || !id_pieza) {
			return res.status(400).json({ error: 'Uso data is required' });
		}
		const transaction = await sequelize.transaction(); // Start a new transaction
		try {
			tipoData.forEach(async (tipo) => {
				const tipos = await Tipos.create(tipo, { transaction });
				await Pieza_Tipos.create(
					{
						id_pieza: id_pieza,
						id_tipo: tipos.id_tipo,
					},
					{ transaction }
				);
			});
			await transaction.commit(); // Commit the transaction
			return res.status(201).json({ message: 'Pieza Tipo created' });
		} catch (error) {
			await transaction.rollback(); // Rollback the transaction
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const piezaTipos = await Pieza_Tipos.findAll({
				include: [
					{
						model: Tipos,
						as: 'tipo',
						required: true,
					},
					{
						model: 'piezas',
						as: 'pieza',
						required: true,
					},
				],
			});
			return res.status(200).json(piezaTipos);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const piezaTipo = await Pieza_Tipos.findByPk(parseInt(req.params.id));
			if (!piezaTipo) {
				return res.status(404).json({ error: 'Pieza Tipo not found' });
			}
			return res.status(200).json(piezaTipo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Pieza_Tipos.update(req.body, {
				where: { id_pieza_tipo: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza Tipo not found' });
			}
			const updatedPiezaTipo = await Pieza_Tipos.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedPiezaTipo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza_Tipos.destroy({
				where: { id_pieza_tipo: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza Tipo not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
