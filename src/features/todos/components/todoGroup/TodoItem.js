import React from "react";
import "./TodoItem.css";
import { completeTodo } from "../../reducers/todosSlice";
import { useDispatch } from "react-redux";

export function TodoItem(props) {
  const dispatch = useDispatch();

  const handleComplele = (id, e) => {
    dispatch(completeTodo(id));
  };

  return (
    <div className="todo-item">
      <p className={"todo-item__content__" + props.item.isCompleted}>
        {props.item.text}
      </p>
      <button
        className="todo-item__button"
        onClick={handleComplele.bind(this, props.item.id)}
      >
        {props.item.isCompleted ? "Undo" : "complete"}
      </button>
    </div>
  );
}
