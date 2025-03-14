const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
   return (
     <li className="flex justify-between items-center p-4 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600">
       <span
         className={`flex-1 text-lg ${
           todo.completed ? "line-through text-gray-400" : "text-gray-200"
         }`}
       >
         {todo.text}
       </span>
       <div className="space-x-2">
         <button
           onClick={() => toggleTodo(todo.id)}
           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
         >
           Toggle
         </button>
         <button
           onClick={() => deleteTodo(todo.id)}
           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
         >
           Delete
         </button>
       </div>
     </li>
   );
 };
 
 export default TodoItem;