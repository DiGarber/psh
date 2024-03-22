import Match from "./Match.js";
import User from "./User.js";
import Score from "./Score.js";
/* //Match Relations
Match.hasMany(Score);
Score.belongsTo(Match);
//Score Relations
User.hasMany(Score);
Score.belongsTo(User); */

export default {
  Match,
  User,
  Score,
};
