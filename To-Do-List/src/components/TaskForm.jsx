import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert("Please fill out all fields");
      return;
    }
    addTask({
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    });
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-task-btn">Add Task</button>
    </form>
  );
};

export default TaskForm;