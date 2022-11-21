import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3001;

const randomUuid = uuidv4();

const dir = "/tmp/logs";

const getFile = async () =>
  new Promise((res) => {
    fs.readFile(dir + "/pingpong.log", (err, buffer) => {
      if (err)
        return console.log("FAILED TO READ FILE", "----------------", err);
      res(buffer);
    });
  });

const generateUuid = () => {
  console.log(`${new Date()}:`, randomUuid);

  setTimeout(() => {
    generateUuid();
  }, 5000);
};

app.use(express.json());
app.use(cors());

app.get("/status", async (req, res) => {
  const number = await getFile();
  res.send(`${new Date()}: ${randomUuid}\nPing / Pongs: ${number}`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

generateUuid();
