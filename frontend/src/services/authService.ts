import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email: string, password: string) => {
  const response = await API.post("/auth/login", {
    email,
    password,
  });

  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

export const registerUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  const response = await API.post("/auth/register", {
    fullName,
    email,
    password,
  });

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export default API;