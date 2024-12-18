import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTodos, DeleteTodo } from "../../app/features/todos/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todoItem = useSelector((state) => state.todos.todo);
  const [input, setInput] = useState({
    name: "",
    status: "pending",
  });
  const statusClass = () => {
    if (todoItem.status == "Active") {
      return "bg-green-500 text-white";
    } else {
      return "bg-yellow-500 text-white";
    }
  };

  const HandleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateTodos(input));

    setInput({
      name: "",
      status: "pending",
    });
  };
  //  delete todo
  const handleDeleteTodo = (id) => {
    dispatch(DeleteTodo(id));
  };

  return (
    <>
      <div className="w-[500px] my-10 mx-auto py-4 px-2 bg-white shadow-md">
        <form action="" onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              onChange={HandleInputChange}
              value={input.name}
              name="name"
              placeholder="Todo Name"
              className="w-full rounded border border-red-100 py-2  px-2 focus:outline-none mb-3"
            />
          </div>
          <div>
            <select
              className="w-full rounded border border-red-100 py-2  px-2 focus:outline-none"
              name="status"
              onChange={HandleInputChange}
              value={input.status}
              id=""
            >
              <option value="Pending">pending</option>
              <option value="Processing">processing</option>
              <option value="Active">Compeleted</option>
            </select>
          </div>
          <div>
            <button
              className=" ml-2 mt-5 bg-red-400 text-white p-2 rounded"
              type="submit"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto bg-white p-3 shadow-lg ">
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {todoItem.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    className={
                      item.status == "Active"
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
                    }
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleDeleteTodo(item.id)}
                        className="text-[#e9e9e9be] text-2xl mr-2"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button className="text-[#e9e9e9] text-2xl mr-2">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todos;
