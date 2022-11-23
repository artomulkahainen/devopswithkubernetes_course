import express from "express";
import cors from "cors";
import fs from "fs";
import { readFile, writeFile } from "fs/promises";

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const dir = "/tmp/logs";

const getFile = async () =>
  new Promise((res) => {
    fs.readFile(dir + "/pingpong.log", (err, buffer) => {
      if (err)
        return console.log("FAILED TO READ FILE", "----------------", err);
      res(buffer);
    });
  });

app.get("/pingpong", async (req, res) => {
  let number = await getFile();
  number++;

  number = number.toString();
  console.log(number);

  await writeFile(`${dir}/pingpong.log`, number, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully");
    }
  });

  res.send(`pong ${number}`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

if (!fs.existsSync(`${dir}/pingpong.log`)) {
  const content = "0";

  await writeFile(`${dir}/pingpong.log`, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully");
    }
  });
  console.log("new folder and file created successfully");
}
