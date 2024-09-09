'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'procedencias',
		{
			id_procedencia: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			periodo_inicio: DataTypes.DATE,
			periodo_fin: DataTypes.DATE,
			origen: DataTypes.STRING,
			nivel_cronologico: DataTypes.INTEGER,
			descripcion: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: 'Procedencias',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_procedencia',
						},
					],
				},
			],
		}
	);
};
