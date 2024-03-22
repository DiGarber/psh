import db from "../index.js";
import { DataTypes, Model } from "sequelize";

/* const User = db.define("User", {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
  },
  apiID: {
    type: DataTypes.STRING,
      }
}); */

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: DataTypes.STRING,
    apiID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

export default User;
