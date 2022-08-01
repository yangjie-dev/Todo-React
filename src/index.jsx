import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store = {store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
