import React from "react";
import "./TodoList.css";
import { useSelector } from "react-redux";
import { getTodos } from "../redux/selectors";

function TodoList() {
  const todos = useSelector(getTodos);

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
