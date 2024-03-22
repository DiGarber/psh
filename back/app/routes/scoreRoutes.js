import { Router } from "express";
import {
  generateCSV,
  getTopScores,
} from "../db/controllers/scoreController.js";

const scoreRouter = Router();

scoreRouter.post("/csv", generateCSV);
scoreRouter.get("/top", getTopScores);

export default scoreRouter;
