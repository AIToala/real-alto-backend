'use strict';

module.exports = (sequelize, DataTypes) => {
	const pieza_tipos = sequelize.define(
		'pieza_tipos',
		{
			id_pieza_tipo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_tipo: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'tipos',
					key: 'id_tipo',
				},
			},
			id_pieza: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'piezas',
					key: 'id_pieza',
				},
			},
		},
		{
			sequelize,
			tableName: 'pieza_tipos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_pieza_tipo',
						},
					],
				},
				{
					name: 'id_tipo',
					using: 'BTREE',
					fields: [
						{
							name: 'id_tipo',
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
	pieza_tipos.associate = function (models) {
		pieza_tipos.belongsTo(models.tipos, {
			foreignKey: 'id_tipo',
			as: 'tipo',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
		pieza_tipos.belongsTo(models.piezas, {
			foreignKey: 'id_pieza',
			as: 'pieza',
			onUpdate: 'CASCADE', // Update behavior
			onDelete: 'CASCADE', // Delete behavior
		});
	};
	return pieza_tipos;
};
