import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const createTodo = async (token, todo) => {
  const response = await axios.post(`${API_URL}/todos`, todo, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

const getTodos = async (token) => {
  const response = await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

const updateTodo = async (token, id, todo) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, todo, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

const deleteTodo = async (token, id) => {
  const response = await axios.delete(`${API_URL}/todos/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export { createTodo, getTodos, updateTodo, deleteTodo };
