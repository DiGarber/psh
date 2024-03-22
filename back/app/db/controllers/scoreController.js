import csvGenerator from "../../utils/shared/csvGenerator.js";
import Models from "../models/index.js";

const { Match, User, Score } = Models;

export const getTopScores = async (req, res) => {
  try {
    const topScores = await Score.findAll({
      order: [["value", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "apiID", "nickname", "picture"],
        },
        {
          model: Match,
          attributes: ["id", "createdAt", "updatedAt"],
        },
      ],

      limit: 10,
    });
    res && res.status(200).send({ data: topScores });
    return topScores;
  } catch (error) {
    console.error("Error fetching top ten matches:", error);
    res && res.status(500).send({ error });
  }
};

export const generateCSV = (req, res) => {
  try {
    //req.body should be formatted as an array of objects where each object is a row
    const csv = csvGenerator(req.body?.data ?? []);
    res.status(200).send({ data: csv });
  } catch (error) {
    res.status(500).send({ error });
  }
};
