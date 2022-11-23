import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

let counter = 0;

app.get("/pingpong", (req, res) => {
  res.send(`pong ${counter}`);
  counter++;
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
