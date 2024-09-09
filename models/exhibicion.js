'use strict';
module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'exhibiciones',
		{
			id_exhibicion: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_exhibicion: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: 'Exhibiciones',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_exhibicion',
						},
					],
				},
			],
		}
	);
};
