import { Router } from "express";
import {
  generateGameStatistics,
  getLastStatistic,
  /*   deleteMatch, */
} from "../db/controllers/matchController.js";

const matchRouter = Router();

matchRouter.post("/", generateGameStatistics);
matchRouter.get("/last", getLastStatistic);

/* matchRouter.delete("/:id", deleteMatch); */

export default matchRouter;
