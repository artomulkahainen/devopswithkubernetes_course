import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

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

app.get("/status", (req, res) => {
  res.send(`${new Date()}: ${randomUuid}`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

generateUuid();
