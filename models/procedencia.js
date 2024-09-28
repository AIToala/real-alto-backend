'use strict';

module.exports = (sequelize, DataTypes) => {
	const procedencias = sequelize.define(
		'procedencias',
		{
			id_procedencia: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			periodo_inicio: DataTypes.STRING,
			periodo_fin: DataTypes.STRING,
			origen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nivel_cronologico: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
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
	procedencias.associate = function (models) {
		procedencias.hasMany(models.pieza_procedencias, {
			foreignKey: 'id_procedencia',
			as: 'pieza_procedencias',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return procedencias;
};
