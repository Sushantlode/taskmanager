import axios from 'axios';

const API_URL = 'https://skyroottaskbackend.onrender.com/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
