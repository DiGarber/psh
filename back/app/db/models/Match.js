import db from "../index.js";
import { Sequelize, DataTypes, Model } from "sequelize";

/* const Match = db.define("Match", {
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
}); */

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: db,
    modelName: "Match",
  }
);

export default Match;
