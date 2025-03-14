import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput(""); //clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6 border-b-2 border-gray-500 pb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="p-3 flex-1 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg ml-3 transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;