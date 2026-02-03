// src/API call/TeacherAPI.jsx

import axios from 'axios';
import { toast } from "react-toastify";

const API_URL = 'http://localhost:3000/api/teachers';

// Helper to get token
const getToken = () => localStorage.getItem('token');

// Axios instance with interceptors (same pattern as StudentAPI)
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Operation failed';
    toast.error(message);
    return Promise.reject(error);
  }
);

// ─────────────────────────────────────────────────────────────
//                          TEACHER APIs
// ─────────────────────────────────────────────────────────────

/** Get all teachers */
export const getAllTeachersAPI = async () => {
  try {
    const response = await api.get('/getAll-teachers');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** Get single teacher by ID */
export const getTeacherByIdAPI = async (id) => {
  try {
    const response = await api.get(`/get-teacher/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** Create new teacher */
export const addTeacherAPI = async (teacherData) => {
  try {
    const response = await api.post('/create-teacher', teacherData);
    toast.success('Teacher added successfully!');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** Update teacher */
export const updateTeacherAPI = async (id, teacherData) => {
  try {
    const response = await api.put(`/update-teacher/${id}`, teacherData);
    toast.success('Teacher updated successfully!');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** Delete teacher */
export const deleteTeacherAPI = async (id) => {
  try {
    await api.delete(`/delete-teacher/${id}`);
    toast.success('Teacher deleted successfully!');
  } catch (error) {
    throw error;
  }
};

