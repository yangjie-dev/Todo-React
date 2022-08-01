import React, { useState } from "react";
import "./TodoForm.css";
import { addTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/selectors";

function TodoForm() {
  const [text, setText] = useState("");

  const todos = useSelector(getTodos);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    dispatch(addTodo(text));

    setText("");
  };

  return (
    <div className="todo-form">
      <p> What needs to be done? </p>
      <form onSubmit={handleSubmit} className="todo-form__content">
        <input
          required
          type="text"
          onChange={handleChange}
          value={text}
        />
        <button className="todo-form__content__button">
          Add #{todos.length + 1}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
