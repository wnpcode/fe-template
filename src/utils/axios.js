import axios from 'axios';
import toast from 'react-hot-toast';

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://your-api.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage or state
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        if (window.location.href.includes('/auth/loginformik'))
          toast.error('Username or password is incorrect.');
        // Handle logout or redirect to login
        console.log(window.location.href, error);
        if (!window.location.href.includes('/auth/loginformik')) {
          toast.error('Unauthorized! Redirecting to login...');
          window.location.href = '/auth/loginformik';
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
