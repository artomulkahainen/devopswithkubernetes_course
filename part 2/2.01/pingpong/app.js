import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

let pingpongCount = 0;

app.get("/pingpong", async (req, res) => {
  res.json({ count: pingpongCount });
  pingpongCount++;
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
