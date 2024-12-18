import { useDispatch } from "react-redux";
import "./App.css";
import Todos from "./Components/Todos/Todos";
import { useEffect } from "react";
import { getAllTodos } from "./app/features/todos/todoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <>
      <Todos />
    </>
  );
}

export default App;
