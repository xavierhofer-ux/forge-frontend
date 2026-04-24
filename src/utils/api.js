import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API calls
export const authAPI = {
  signup: (data) => api.post('/auth/signup', data),
  login: (data) => api.post('/auth/login', data),
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/profile', data),
};

// Post Optimizer API calls
export const postAPI = {
  optimize: (data) => api.post('/posts/optimize', data),
  getHistory: (params) => api.get('/posts/history', { params }),
  getPost: (id) => api.get(`/posts/${id}`),
  updatePost: (id, data) => api.put(`/posts/${id}`, data),
  deletePost: (id) => api.delete(`/posts/${id}`),
  savePost: (data) => api.post('/posts/save', data),
};

// Billing API calls
export const billingAPI = {
  getPlans: () => api.get('/billing/plans'),
  getCurrentSubscription: () => api.get('/billing/subscription'),
  upgradePlan: (planId) => api.post('/billing/upgrade', { planId }),
  cancelSubscription: () => api.post('/billing/cancel'),
  getInvoices: () => api.get('/billing/invoices'),
};

// Settings API calls
export const settingsAPI = {
  getSettings: () => api.get('/settings'),
  updateSettings: (data) => api.put('/settings', data),
  changePassword: (data) => api.post('/settings/change-password', data),
};

export default api;
