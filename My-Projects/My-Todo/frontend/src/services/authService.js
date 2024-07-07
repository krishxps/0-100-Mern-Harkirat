import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = async (username, password, isAdmin) => {
  const response = await axios.post(`${API_URL}/register`, { username, password, isAdmin });
  return response.data;
};

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export { register, login };
