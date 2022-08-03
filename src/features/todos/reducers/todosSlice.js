import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const { id, text, isCompleted } = action.payload;
        state.push({ id, text, isCompleted });
      },
    },
    completeTodo: {
      reducer: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.isCompleted = !todo.isCompleted;
        }
      },
    },
    initTodos: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
  },
});
export const { addTodo, completeTodo, initTodos } = todosSlice.actions;
export default todosSlice.reducer;
