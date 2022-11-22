import fs from "fs";
import axios from "axios";
import dayjs from "dayjs";

const dir = "/tmp/images/";
const filePath = dir + "image.jpg";

const fileAlreadyExists = async () =>
  new Promise((res) => {
    fs.stat(filePath, (err, stats) => {
      if (err || !stats) return res(false);

      // if file was downloaded yesterday or earlier, download it again
      if (
        dayjs(stats.birthtime)
          .startOf("day")
          .diff(dayjs().startOf("day"), "day") < 0
      ) {
        return res(false);
      }
      return res(true);
    });
  });

export const findAFile = async () => {
  if (await fileAlreadyExists()) return;

  await new Promise((res) => fs.mkdir(dir, (err) => res()));
  const response = await axios.get("https://picsum.photos/200", {
    responseType: "stream",
  });
  response.data.pipe(fs.createWriteStream(filePath));
};

export const getFile = async () =>
  new Promise((res) => {
    fs.readFile(filePath, (err, buffer) => {
      if (err)
        return console.log("FAILED TO READ FILE", "----------------", err);
      res(buffer);
    });
  });
