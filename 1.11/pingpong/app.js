import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const dir = "/usr/app";

app.get("/pingpong", (req, res) => {
  let number;

  fs.readFile(`${dir}/pingpong.log`, "utf8", function (err, data) {
    // Display the file content
    number = Number(data);
  });

  res.send(`pong ${number}`);
  number++;

  fs.writeFile(`${dir}/pingpong.log`, number.toString(), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

if (!fs.existsSync(dir)) {
  await fs.promises.mkdir(dir, { recursive: true });

  const content = "0";

  fs.writeFile(`${dir}/pingpong.log`, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully");
    }
  });
  console.log("new folder and file created successfully");
}
