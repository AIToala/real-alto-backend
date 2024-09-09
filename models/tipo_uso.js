'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'tipo_usos',
		{
			id_tipo_uso: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_tipo_uso: DataTypes.STRING,
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'Tipo_Usos',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id_tipo_uso' }],
				},
			],
		}
	);
};
