import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 3001;

const randomUuid = uuidv4();

const generateUuid = () => {
  console.log(`${new Date()}:`, randomUuid);

  setTimeout(() => {
    generateUuid();
  }, 5000);
};

app.use(express.json());
app.use(cors());

app.get("/status", async (req, res) => {
  const message = process.env.MESSAGE;
  const pingpongCount = await (
    await fetch("http://pingpong-service.devopscourse:3002/pingpong")
  ).json();
  res.send(
    `<div><p>${
      message || "not found"
    }</p><p>${new Date()}: ${randomUuid}</p><p>Ping / Pongs: ${
      pingpongCount.count
    }</p></div>`
  );
});

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

generateUuid();
