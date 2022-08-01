import React from "react";
import { useSelector } from "react-redux";
import "./TodoGroup.css";
import { TodoItem } from "./TodoItem";

export function TodoGroup() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-group">
      <h2> TodoGroup </h2>

      {todos.map((item) => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </div>
  );
}

export default TodoGroup;
