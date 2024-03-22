import axios from "axios";

export default async () => {
  try {
    const response = await axios.get("https://randomuser.me/api");
    const { results } = response.data;
    const { name, picture, login } = results[0];
    const player = {
      nickname: name.first + name.last,
      profileImage: picture.thumbnail,
      uuid: login?.uuid ?? "",
    };
    return player;
  } catch (error) {
    console.error(`Error fetching random player: ${error}`);
    throw error;
  }
};
