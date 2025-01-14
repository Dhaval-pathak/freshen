import api from "./constant";
// User API endpoints
export const registerUser = async (email, password) => {
  const response = await api.post('/auth/register', { email, password });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const fetchProfile = async (token) => {
  const response = await api.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};