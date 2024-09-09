const { Sequelize, Op } = require('sequelize');
const upload = require('../config/multer'); // Import the multer configuration
const Modelos = require('../models').modelos;
const Modelo_Metadata = require('../models').modelo_metadata;

module.exports = {
	async create(req, res) {
		const { modeloData, metadata } = req.body;
		if (!modeloData || !metadata) {
			return res.status(400).json({ error: 'Metadata is required' });
		}
		const transaction = await Sequelize.transaction(); // Start a new transaction
		try {
			upload.single('image')(req, res, async (err) => {
				if (err) {
					return res.status(400).json({ error: err.message });
				}
				if (!req.file) {
					return res.status(400).json({ error: 'Image is required' });
				}
				const imageUrl = req.file.path;
				const publicId = req.file.filename;
				const createdMetadata = await Modelo_Metadata.create(metadata, { transaction });

				const createdModelo = await Modelos.create(
					{
						...modeloData,
						id_modelo_metadata: createdMetadata.id_modelo_metadata,
						path_archivo: imageUrl,
						nombre_archivo: publicId,
						thumbnail: imageUrl,
					},
					{ transaction }
				);
				await transaction.commit(); // Commit the transaction
				return res.status(201).json({ message: 'Modelo created', modelo: createdModelo });
			});
		} catch (error) {
			await transaction.rollback(); // Rollback the transaction
			return res.status(400).json({ error: error.message });
		}
	},

	async findAll(req, res) {
		try {
			const modelos = await Modelos.findAll({
				include: [
					{
						model: Modelo_Metadata,
						as: 'modelo_metadata',
					},
				],
			});
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
