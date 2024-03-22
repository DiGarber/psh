import db from "../index.js";
import { DataTypes, Model } from "sequelize";
import Match from "./Match.js";
import User from "./User.js";

/* const Score = db.define("Score", {
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 100,
    },
  },
});

Score.beforeCreate((score) => {
  score.value = Math.floor(Math.random() * 100) + 1;
});
 */

class Score extends Model {}

Score.init(
  {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: db,
    modelName: "Score",
  }
);

Score.belongsTo(Match);
Score.belongsTo(User);

export default Score;
