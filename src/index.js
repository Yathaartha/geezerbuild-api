import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./database/db.js";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import assignmentRoutes from "./routes/assignments.js";

const PORT = process.env.PORT || 7000;

const app = express();

dotenv.config();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.use("/assignments", assignmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

//check db connection
app.get("/db", (req, res) => {
  try {
    sequelize.authenticate();
    res.send("DB connected");
  } catch (error) {
    console.log(error);
  }
});
