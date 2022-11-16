import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((res) => setTodos(res.data));
  }, []);

  const createTodo = () => {
    axios
      .post("http://localhost:3001/todos", { todo: todoText })
      .then((res) => {
        setTodos((prev) => [...prev, res.data]);
        setTodoText("");
      });
  };

  const updateTodo = (id) => {
    axios.patch("http://localhost:3001/todos", { id }).then(() => {
      setTodos((prev) =>
        prev.map((t) =>
          t.id !== id ? t : { id: t.id, text: t.text, completed: !t.completed }
        )
      );
    });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos((prev) => prev.filter((t) => t.id !== id)));
  };

  return (
    <div className="App" style={{ padding: "1em" }}>
      <h1>Todos</h1>
      {todos && (
        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <div style={{ display: "flex", gap: "1em" }}>
                <p>{t.text}</p>
                <p style={{ color: t.completed ? "green" : "red" }}>
                  {t.completed ? "Done" : "Not done"}
                </p>
                <button onClick={() => updateTodo(t.id)}>Toggle</button>
                <button onClick={() => deleteTodo(t.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Add new</h3>
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={createTodo}>Send</button>
    </div>
  );
};

export default App;
