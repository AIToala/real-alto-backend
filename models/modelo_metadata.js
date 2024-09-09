'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'modelo_metadata',
		{
			id_modelo_metadata: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_modelo: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
			autor: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'Modelo_Metadata',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
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
