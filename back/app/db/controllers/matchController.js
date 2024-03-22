import csvGenerator from "../../utils/shared/csvGenerator.js";
import fetchRandomPlayer from "../../utils/statistics/fetchRandomPlayer.js";
import Models from "../models/index.js";

const { Match, User, Score } = Models;

export const generateGameStatistics = async (req, res) => {
  try {
    const match = await Match.create({});

    const playerCount = Math.floor(Math.random() * 5) + 1;
    const playersToFetch = Array(playerCount)
      .fill()
      .map(async (item) => {
        return await fetchRandomPlayer();
      });

    const players = await Promise.all(playersToFetch);
    const scores = [];

    await Promise.all(
      players.map(async (player) => {
        const [dbUser] = await User.findOrCreate({
          where: { apiID: player?.uuid || "-" },
          defaults: {
            nickname: player.nickname,
            apiID: player.uuid,
            picture: player.profileImage,
          },
        });

        const score = await Score.create({
          value: Math.floor(Math.random() * 100) + 1,
        });

        await score.setUser(dbUser);
        await score.setMatch(match);
        scores.push(score);
      })
    );

    return scores;
  } catch (error) {
    console.error("Error generating match:", error);
  }
};

export const getLastStatistic = async (req, res) => {
  try {
    const lastStatistic = await Match.findOne({
      order: [["createdAt", "DESC"]],
      attributes: ["createdAt"],
    });

    res.status(200).send({ data: lastStatistic });
  } catch (error) {
    console.error("Error fetching most recent match:", error);
    throw error;
  }
};
/* export const deleteMatch = async (req, res) => {
  const { id } = req.params;

  const match = await Match.findByPk(id);

  if (!match) {
    return res
      .sendStatus(404)
      .json({ error: `There is no match with id: ${id} ` });
  }

  await match.update({ active: false });
  console.log("match deleted" + match);
}; */
