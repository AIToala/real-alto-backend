const { Op } = require('sequelize');
const { sequelize } = require('../models');
const Pieza_Dimensiones = require('../models').pieza_dimensiones;
const Dimensiones = require('../models').dimensiones;
module.exports = {
	async create(req, res) {
		const { dimensionesData, id_pieza } = req.body;
		if (!dimensionesData || dimensionesData.length === 0 || !id_pieza) {
			return res.status(400).json({ error: 'Dimensiones data is required' });
		}
		const transaction = await sequelize.transaction(); // Start a new transaction
		try {
			dimensionesData.forEach(async (dimension) => {
				console.log(dimension);
				const dimensiones = await Dimensiones.create(
					{
						valor_medida: dimension.valor_medida,
						unidad_medida: dimension.unidad_medida,
					},
					{ transaction }
				);
				await Pieza_Dimensiones.create(
					{
						id_pieza: id_pieza,
						id_dimension: dimensiones.id_dimension,
					},
					{ transaction }
				);
			});
			await transaction.commit(); // Commit the transaction
			return res.status(201).json({ message: 'Pieza Dimension created' });
		} catch (error) {
			await transaction.rollback(); // Rollback the transaction
			console.error(error);
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const piezaDimensiones = await Pieza_Dimensiones.findAll();
			return res.status(200).json(piezaDimensiones);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async findOne(req, res) {
		try {
			const piezaDimension = await Pieza_Dimensiones.findByPk(parseInt(req.params.id));
			if (!piezaDimension) {
				return res.status(404).json({ error: 'Pieza Dimension not found' });
			}
			return res.status(200).json(piezaDimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async update(req, res) {
		try {
			const [updated] = await Pieza_Dimensiones.update(req.body, {
				where: { id_pieza_dimension: parseInt(req.params.id) },
			});
			if (!updated) {
				return res.status(404).json({ error: 'Pieza Dimension not found' });
			}
			const updatedPiezaDimension = await Pieza_Dimensiones.findByPk(parseInt(req.params.id));
			return res.status(200).json(updatedPiezaDimension);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},

	async delete(req, res) {
		try {
			const deleted = await Pieza_Dimensiones.destroy({
				where: { id_pieza_dimension: parseInt(req.params.id) },
			});
			if (!deleted) {
				return res.status(404).json({ error: 'Pieza Dimension not found' });
			}
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	},
};
