import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the todos:", error);
      });
  }, []);

  const markCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} markCompleted={markCompleted} />
        ))}
      </div>
    </div>
  );
};

export default App;
