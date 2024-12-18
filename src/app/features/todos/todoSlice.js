// create todo slice

import { createSlice } from "@reduxjs/toolkit";
import { generateId, todos } from "../../../../data/todo";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [],
    error: null,
    message: null,
    loader: false,
  },
  reducers: {
    getAllTodos: (state) => {
      state.todo = todos;
    },
    CreateTodos: (state, actions) => {
      state.todo.push({ ...actions.payload, id: generateId() });
    },
    DeleteTodo: (state, actions) => {
     state.todo = state.todo.filter((item) => item.id != actions.payload)
    },
  },
});

// export reducer
export const { getAllTodos, CreateTodos, DeleteTodo } = todoSlice.actions;

// export default todo Reducer

export default todoSlice.reducer;
