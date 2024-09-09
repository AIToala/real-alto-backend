'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'modelos',
		{
			id_modelo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_modelo_metadata: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Modelo_Metadata',
					key: 'id_modelo_metadata',
				},
			},
			nombre_archivo: DataTypes.STRING,
			path_archivo: DataTypes.STRING,
			myme_type: DataTypes.STRING,
			file_type: DataTypes.STRING,
			tamaño_modelo: DataTypes.INTEGER,
			thumbnail: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'Modelos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo',
						},
					],
				},
				{
					name: 'id_modelo_metadata',
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo_metadata',
						},
					],
				},
			],
		}
	);
};
