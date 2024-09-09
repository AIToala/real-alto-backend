'use strict';

module.exports = (sequelize, DataTypes) => {
	const pieza_usos = sequelize.define(
		'pieza_usos',
		{
			id_pieza_uso: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_tipo_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Tipo_Usos',
					key: 'id_tipo_uso',
				},
			},
			id_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Piezas',
					key: 'id_pieza',
				},
			},
		},
		{
			sequelize,
			tableName: 'Pieza_Usos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_usos',
						},
					],
				},
				{
					name: 'id_tipo_uso',
					using: 'BTREE',
					fields: [
						{
							name: 'id_tipo_uso',
						},
					],
				},
				{
					name: 'id_pieza',
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza',
						},
					],
				},
			],
		}
	);
	pieza_usos.associate = function (models) {
		pieza_usos.hasMany(models.tipo_usos, {
			foreignKey: 'id_tipo_uso',
			as: 'tipo_uso',
		});
		pieza_usos.belongsTo(models.piezas, {
			foreignKey: 'id_pieza',
			as: 'pieza',
		});
	};
	return pieza_usos;
};
