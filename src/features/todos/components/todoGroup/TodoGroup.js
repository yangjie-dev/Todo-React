import React from "react";
import { useSelector } from "react-redux";
import "./TodoGroup.css";
import { TodoItem } from "./TodoItem";

export function TodoGroup() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </ul>
  );
}

export default TodoGroup;
