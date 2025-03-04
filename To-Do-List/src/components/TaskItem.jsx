import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, name: taskName, description: taskDescription });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="task-edit-input"
          />
          <input
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="task-edit-input"
          />
          <button onClick={handleUpdate} className="save-btn">Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => updateTask({ ...task, completed: !task.completed })}
            className="task-text"
          >
            {task.name} - {task.description}
          </span>
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;