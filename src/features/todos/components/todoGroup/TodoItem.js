import React from "react";

export function TodoItem(props) {
  return <li className="todo-list__li--done">{props.item.text}</li>;
}
