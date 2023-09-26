import api from "../configs/config";

export const Authlogin = async ({ user_name, password }) => {
  try {
    const res = await api.post("/auth/login", { user_name, password });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const AuthRegister = async ({ user_name, email, password }) => {
  try {
    const res = await api.post("/auth/register", {
      user_name,
      email,
      password,
    });
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
