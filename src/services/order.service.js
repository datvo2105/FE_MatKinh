import api from "../configs/config";

export const getShipping = async () => {
  try {
    const res = await api.get("/shipping");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllOrder = async () => {
  try {
    const res = await api.get("/order/user");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/order/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateOrder = async (id, data) => {
  try {
    const res = await api.patch(`/order/${id}`, data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const orderProduct = async (order) => {
  try {
    const res = await api.post("/order", order);
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
