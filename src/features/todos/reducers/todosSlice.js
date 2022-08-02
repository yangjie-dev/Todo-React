import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        const id = nanoid();
        const isCompleted = false;
        return { payload: { id, text, isCompleted } };
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
  },
});
export const { addTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
