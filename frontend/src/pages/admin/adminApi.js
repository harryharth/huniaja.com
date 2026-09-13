import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export function getToken() {
  return localStorage.getItem("huniaja_admin_token");
}

export function clearToken() {
  localStorage.removeItem("huniaja_admin_token");
}

export const adminApi = axios.create({ baseURL: API });

adminApi.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

adminApi.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401) {
      clearToken();
      if (!window.location.pathname.startsWith("/admin/login")) {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(err);
  }
);
