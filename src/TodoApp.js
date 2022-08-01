import React from "react";
import TodoGroup from "./features/todos/components/todoGroup/TodoGroup";
import TodoHeader from "./features/todos/components/todoHeader/TodoHeader";
import TodoForm from "./features/todos/components/todoForm/TodoForm";

export default function TodoApp() {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <TodoGroup />
    </div>
  );
}
