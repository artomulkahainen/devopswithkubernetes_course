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
  const pingpongCount = await (
    await fetch("http://pingpong-service:3002/pingpong")
  ).json();
  res.send(
    `${new Date()}: ${randomUuid}\nPing / Pongs: ${pingpongCount.count}`
  );
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

generateUuid();
