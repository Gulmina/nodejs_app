import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors({ origin: "*" }));
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello World");
});
app.listen(8000, () => console.log(`server is running at 8000`));
