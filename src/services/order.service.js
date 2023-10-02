import api from "../configs/config";

export const orderProduct = async (order) => {
  try {
    const res = await api.post("/order", order);
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
