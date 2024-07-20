import React from "react";

const TodoItem = ({ todo, markCompleted }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => markCompleted(todo.id)}
        style={{ marginRight: "10px" }}
      />
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </p>
    </div>
  );
};

export default TodoItem;
