import api from "./config";

export const Authlogin = async ({ user_name, password }) => {
  try {
    const res = await api.post("/auth/login", { user_name, password });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
