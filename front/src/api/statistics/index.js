import axios from "axios";

const BASE_URL = `${
  /* process?.env?.BACKEND_URL ||  */
  "http://localhost:8000"
}`;

export const getTopPlayers = async () => {
  try {
    const { data } = await axios.get(BASE_URL + "/score/top");

    const formattedTopScores = data?.data?.map((topScore) => {
      return {
        Score: topScore.value ?? 1,
        "Created At": topScore.createdAt
          ?.replaceAll("T", " ")
          .replaceAll("Z", "")
          .replaceAll(".000", ""),
        Nickname: topScore.User?.nickname,
        "User Id": topScore.UserId,
        "User API id": topScore.User?.apiID,
        Picture: topScore.User?.picture,
        "Match Id": topScore.MatchId,
      };
    });

    return formattedTopScores;
  } catch (error) {
    console.log("Error retrieving top players:", error);
  }
};

export const getLastStatistic = async () => {
  try {
    const { data } = await axios.get(BASE_URL + "/match/last");

    const timestamp = data?.data?.createdAt
      ?.replaceAll("T", " ")
      .replaceAll("Z", "")
      .replaceAll(".000", "");
    return timestamp ?? "";
  } catch (error) {
    console.log("Error retrieving last statistic", error);
  }
};

export const getCsv = async (stats) => {
  try {
    const { data } = await axios.post(
      BASE_URL + "/score/csv",
      {
        data: stats,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return data?.data;
  } catch (error) {
    console.log("Error retrieving top players:", error);
  }
};
