import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./features/todos/todoSlice";

// Create Redux store
const store = configureStore({
  reducer: {
    todos: todoreducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
  devTools: true,
});
// export store
export default store;
