import React from "react";
import TodoGroup from "../todoGroup/TodoGroup";
import TodoHeader from "../todoHeader/TodoHeader";
import TodoGenerator from "../todoGenerator/TodoGenerator";
import { useSelector } from "react-redux";
import "./TodoList.css";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <TodoHeader />
      <div className="todo-list">
        <h1> TodoList</h1>
        <TodoGroup todos={todos} />
        <TodoGenerator />
      </div>
    </div>
  );
}
