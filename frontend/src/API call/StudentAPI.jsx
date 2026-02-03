// src/API call/StudentAPI.jsx

import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000/api/students';

// Helper to get token (you can improve this later with context or auth service)
const getToken = () => localStorage.getItem('token');

// Create axios instance with common config (recommended)
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add token to every request automatically
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

// Response interceptor - common error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';
    
    toast.error(message);
    return Promise.reject(error);
  }
);

// ─────────────────────────────────────────────────────────────
//                          STUDENT APIs
// ─────────────────────────────────────────────────────────────

/**
 * Get all students
 * @returns {Promise<Array>} List of students
 */
export const getAllStudentsAPI = async () => {
  try {
    const response = await api.get('/getAll-students');
    return response.data; // Assuming backend returns { success: true, students: [...] }
  } catch (error) {
    // Error is already handled by interceptor → toast shown
    throw error;
  }
};

/**
 * Get single student by ID
 * @param {string} id - Student MongoDB _id
 * @returns {Promise<Object>} Student object
 */
export const getStudentByIdAPI = async (id) => {
  try {
    const response = await api.get(`/get-student/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Create new student
 * @param {Object} studentData - { name, rollNo, Class, Address, ... }
 * @returns {Promise<Object>} Created student
 */
export const addStudentAPI = async (studentData) => {
  try {
    const response = await api.post('/create-student', studentData);
    toast.success('Student added successfully!');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Update existing student
 * @param {string} id - Student MongoDB _id
 * @param {Object} studentData - fields to update
 * @returns {Promise<Object>} Updated student
 */
export const updateStudentAPI = async (id, studentData) => {
  try {
    const response = await api.put(`/update-student/${id}`, studentData);
    toast.success('Student updated successfully!');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete student
 * @param {string} id - Student MongoDB _id
 * @returns {Promise<void>}
 */
export const deleteStudentAPI = async (id) => {
  try {
    await api.delete(`/delete-student/${id}`);
    toast.success('Student deleted successfully!');
  } catch (error) {
    throw error;
  }
};

// Optional: If you want to delete by rollNo instead of _id
// (only if your backend supports it - most don't by default)
export const deleteStudentByRollNoAPI = async (rollNo) => {
  try {
    await api.delete(`/delete-student/rollNo/${rollNo}`); // ← custom endpoint example
    toast.success('Student deleted successfully!');
  } catch (error) {
    throw error;
  }
};


