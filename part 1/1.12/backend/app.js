import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { findAFile, getFile } from "./imageUtil.js";

const app = express();
const port = process.env.PORT;

let todos = [];

app.use(express.json());
app.use(cors());

const apiPrefix = "/api";

app.get(apiPrefix + "/image", async (req, res) => {
  await findAFile();

  res.set("Content-Type", "image/jpeg");
  res.end(await getFile());
});

app.get(apiPrefix + "/todos", async (req, res) => {
  res.json(todos);
});

app.post(apiPrefix + "/todos", (req, res) => {
  const id = uuidv4();
  todos.push({ id, text: req.body.todo, completed: false });

  res.json(todos.find((t) => t.id === id));
});

app.patch(apiPrefix + "/todos", (req, res) => {
  if (todos.some((t) => t.id === req.body.id)) {
    todos = todos.map((t) =>
      t.id !== req.body.id
        ? t
        : { id: req.body.id, text: t.text, completed: !t.completed }
    );

    return res.json(todos.find((t) => t.id === req.body.id));
  }

  res.json({ error: "todo not found" });
});

app.delete(apiPrefix + "/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== req.params.id);
  res.send(`${req.params.id} is deleted`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

findAFile();
