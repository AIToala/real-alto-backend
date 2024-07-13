"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TipoPieza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  TipoPieza.init(
    {
      id_tipo_pieza: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_tipo_pieza: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descripcion_tipo_pieza: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TipoPieza",
      classMethods: {},
    },
  );
  return TipoPieza;
};
