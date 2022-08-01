import React from "react";
import "./TodoItem.css";

export function TodoItem(props) {
  return (
    <div className="todo-item">
      <p className="todo-item__text">{props.item.text}</p>
    </div>
  );
}
