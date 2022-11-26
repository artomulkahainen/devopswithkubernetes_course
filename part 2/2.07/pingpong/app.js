const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { initDb } = require("./db.js");
const { Pingpong } = require("./models/Pingpong.js");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/pingpong", async (req, res) => {
  const pingpong = await Pingpong.findByPk(1);
  pingpong.count = pingpong.count + 1;
  await pingpong.save();

  res.json({ count: pingpong.count });
});

initDb();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
