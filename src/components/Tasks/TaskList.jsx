import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../../services/taskService';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  if (loading) return <div>Loading tasks...</div>;

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <TaskForm onTaskCreated={handleTaskCreated} />
      {tasks.length === 0 ? (
        <p>No tasks found. Add a new task!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onUpdate={handleTaskUpdated}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;