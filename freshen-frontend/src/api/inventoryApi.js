import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODNlNzI1NTY4OTcwMmU0NzE4ZDhiMCIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM2ODcyNDY3LCJleHAiOjE3MzY4Nzk2Njd9.IUEdvN0r80314bazqiw34es92XQJ1ytpT8yql9omuyI`, // Replace with your token
  },
});

export const getCategories = async () => {
  const response = await api.get("/productCategories");
  return response.data;
};

export const addCategory = async (category) => {
  const response = await api.post("/productCategories", category);
  return response.data;
};

export const updateCategory = async (id, category) => {
  const response = await api.put(`/productCategories/${id}`, category);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await api.delete(`/productCategories/${id}`);
  return response.data;
};
