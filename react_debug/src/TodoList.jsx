import TodoItem from "./TodoItem";

//todoList component
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-4 mt-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;