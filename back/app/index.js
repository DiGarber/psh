import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db/index.js";
import matchRouter from "./routes/matchRoutes.js";
import scoreRouter from "./routes/scoreRoutes.js";
import userRouter from "./routes/userRoutes.js";
import generateRandomMatch from "./utils/cronJobs/generateRandomMatch.js";

dotenv.config();
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json());

/***  ROUTER ***/
const paths = {
  match: "/match",
  score: "/score",
  user: "/user",
};

server.use(paths.user, userRouter);
server.use(paths.match, matchRouter);
server.use(paths.score, scoreRouter);

server.get("/", (req, res) => {
  res.status(200).send({ message: "Server online." });
});

const dbConnection = async () => {
  try {
    await db.authenticate();
  } catch (error) {
    console.log(error);
  }
};
await dbConnection();

server.listen(8000, async () => {
  generateRandomMatch();
  console.log("Server running on port 8000.");
});
