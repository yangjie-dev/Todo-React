import { createSlice, nanoid } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    }
  },
})
export const { addTodo} = todosSlice.actions
export default todosSlice.reducer