import express from "express";
import fs from "fs";

const app = express();
const port = 3001;

const dir = "/usr/src/app/files";

const readFileFunc = () => {
  if (fs.existsSync(dir)) {
    console.log("reading the file now:");
    fs.readFile(`${dir}/content.log`, "utf8", function (err, data) {
      // Display the file content
      console.log(data);
    });
  } else {
    console.log(`dir not found: ${dir}`);
  }

  setTimeout(() => {
    readFileFunc();
  }, 5000);
};

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

readFileFunc();
