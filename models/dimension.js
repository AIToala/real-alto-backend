'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
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
};
