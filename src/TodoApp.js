import React from "react";
import { Route, Routes } from "react-router";
import { TodoList } from "./features/todos/components/todoList/TodoList";
import { BrowserRouter, Link } from "react-router-dom";
import HelpPage from "./features/todos/components/help/HelpPage";
import "./TodoApp.css"

export default function TodoApp() {
  return (
    <div>
      <BrowserRouter>
      <Link className = "link" to='/'> Home </Link>
      <Link className = "link" to='/help'> Help </Link>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
