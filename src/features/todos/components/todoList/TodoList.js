import React from "react";
import TodoGroup from "../todoGroup/TodoGroup";
import TodoHeader from "../todoHeader/TodoHeader";
import TodoGenerator from "../todoGenerator/TodoGenerator";
import "./TodoList.css";

export function TodoList() {
  return (
    <div>
      <TodoHeader />
      <div className="todo-list">
        <h1> TodoList</h1>
        <TodoGroup />
        <TodoGenerator />
      </div>
    </div>
  );
}
