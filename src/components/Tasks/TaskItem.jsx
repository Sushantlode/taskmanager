import { useState } from 'react';
import { updateTask } from '../../services/taskService';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleUpdate = async () => {
    try {
      const updatedTask = await updateTask(task.id, editedTask);
      onUpdate(updatedTask);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="task-content">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;