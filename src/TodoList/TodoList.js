import React from "react";
import "./TodoList.css";
import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li className="todo-list__li--done" key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
