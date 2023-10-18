import api from "../configs/config";

export const updateProfile = async ({ email, address }) => {
  try {
    const res = await api.patch("/user/updateProfile", { email, address });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const changePassword = async ({ password }) => {
  try {
    const res = await api.patch("/user/changePassword", { password });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
