import React, { useState } from "react";
import "./TodoForm.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addTodo } from "../../reducers/todosSlice";

function TodoForm() {
  const [text, setText] = useState("");

  const todoList = useSelector((state) => state.todos);

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
        <input required type="text" onChange={handleChange} value={text} />
        <button className="todo-form__content__button">
          Add #{todoList.length + 1}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
