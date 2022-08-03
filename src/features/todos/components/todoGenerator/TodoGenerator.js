import React, { useState } from "react";
import "./TodoGenerator.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../reducers/todosSlice";
import { addTodoApi } from "../../../../apis/todos";

function TodoGenerator() {
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

    addTodoApi(text).then((response) => {
      dispatch(addTodo(response.data));
    });
    setText("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit} className="todo-form__content">
        <input required type="text" onChange={handleChange} value={text} />
        <button className="todo-form__content__button">
          Add Todo #{todoList.length + 1}
        </button>
      </form>
    </div>
  );
}

export default TodoGenerator;
