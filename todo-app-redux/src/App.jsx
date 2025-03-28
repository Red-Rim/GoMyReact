import React, { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { setTasksFromlocalStorage } from "./Redux/taskSlice";

//app component
const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasksFromlocalStorage(savedTasks));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //returning the app container
  return (
    <div className="app-container">
      <h1 className="app-title">📝 To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;