import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const app = express();
const port = 3000;

const randomUuid = uuidv4();

const generateUuid = async () => {
  const dir = "/usr/src/app/files";
  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir, { recursive: true });
    console.log("new folder created successfully");
  }

  const content = `${new Date()}: ${randomUuid}`;

  fs.writeFile(`${dir}/content.log`, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully");
    }
    // file written successfully
  });

  setTimeout(() => {
    generateUuid();
  }, 5000);
};

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

generateUuid();
