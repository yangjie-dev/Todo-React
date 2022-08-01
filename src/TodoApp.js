import React from "react";
import TodoGroup from "./features/todos/components/todoGroup/TodoGroup";
import TodoHeader from "./features/todos/components/todoHeader/TodoHeader";
import TodoForm from "./features/todos/components/todoForm/TodoForm";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div>
      <TodoHeader />
      <div className="todo-app">
        <h1> TodoList</h1>
        <TodoGroup />
        <TodoForm />
      </div>
    </div>
  );
}
