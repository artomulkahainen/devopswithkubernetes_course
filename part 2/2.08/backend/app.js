const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { initDb } = require("./db.js");
const { findAFile, getFile } = require("./imageUtil.js");
const { Todo } = require("./models/Todo.js");

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
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (e) {
    res.json({ error: e });
  }
});

app.post(apiPrefix + "/todos", async (req, res) => {
  try {
    const newTodo = await Todo.create({
      text: req.body.todo,
      completed: false,
    });

    res.json(newTodo);
  } catch (e) {
    res.json({ error: e });
  }
});

app.patch(apiPrefix + "/todos", async (req, res) => {
  try {
    const todoToUpdate = await Todo.findByPk(req.body.id);
    todoToUpdate.completed = !todoToUpdate.completed;
    await todoToUpdate.save();

    res.json(todoToUpdate);
  } catch (e) {
    res.json({ error: e });
  }
});

app.delete(apiPrefix + "/todos/:id", async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
    res.json({ status: "OK" });
  } catch (e) {
    res.json({ error: e });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

findAFile();
initDb();
