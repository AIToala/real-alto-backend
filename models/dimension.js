'use strict';

module.exports = (sequelize, DataTypes) => {
	const dimensiones = sequelize.define(
		'dimensiones',
		{
			id_dimension: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			valor_medida: DataTypes.DECIMAL,
			unidad_medida: DataTypes.STRING,
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'Dimensiones',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_dimension' }],
				},
			],
		}
	);
	dimensiones.associate = function (models) {
		dimensiones.hasMany(models.pieza_dimensiones, {
			foreignKey: 'id_dimension',
			as: 'pieza_dimensiones',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return dimensiones;
};
