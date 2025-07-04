import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { databaseConnection } from "./config/db";
import staffRouters from "./routes/staffRouter";

dotenv.config();
databaseConnection();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1", staffRouters);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}....`);
});
