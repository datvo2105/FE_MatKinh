import api from "../configs/config";

export const Authlogin = async ({ user_name, password }) => {
  const res = await api.post("/auth/login", { user_name, password });
  return res.data;
};

export const AuthRegister = async ({ user_name, email, password }) => {
  const res = await api.post("/auth/register", {
    user_name,
    email,
    password,
  });
  return res.data;
};
