import { generateGameStatistics } from "../../db/controllers/matchController.js";

// Here I use setInterval for simplicity. On a production app I would go for a cron job library or most likely a cloud function. //
export default async () => {
  //5 min cron
  setInterval(() => {
    generateGameStatistics();
  }, 300 * 1000);
};
