'use strict';

module.exports = (sequelize, DataTypes) => {
	const modelo_imagen = sequelize.define(
		'modelo_imagen',
		{
			id_modelo_imagen: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombre_modelo: DataTypes.STRING,
			path_archivo: DataTypes.STRING,
			tipo_archivo: DataTypes.STRING,
			descripcion: DataTypes.TEXT,
			autor: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'Modelo_Imagen',
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [
						{
							name: 'id_modelo_imagen',
						},
					],
				},
			],
		}
	);
	modelo_imagen.associate = function (models) {
		modelo_imagen.belongsTo(models.modelos, {
			foreignKey: 'id_modelo_imagen',
			as: 'modelos',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	};
	return modelo_imagen;
};
