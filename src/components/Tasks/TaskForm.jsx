import { useState } from 'react';
import { createTask } from '../../services/taskService';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await createTask({ title, description });
      onTaskCreated(newTask);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;