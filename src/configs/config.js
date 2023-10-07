import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5151",
});

api.interceptors.response.use(
  (config) => config,
  (error) => {
    const message = error?.response?.data?.message || error.message;
    throw new Error(message);
  },
);

export default api;
