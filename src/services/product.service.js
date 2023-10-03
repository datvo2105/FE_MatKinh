import api from "../configs/config";

export const getAllCategory = () => {
  try {
    return api.get("/category");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOneProduct = async (id) => {
  try {
    return await api.get(`/product/${id}`).then((res) => res.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProduct = async (params) => {
  try {
    const res = await api.get("/product", { params });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const filterByCategory = async (query, params) => {
  try {
    const res = await api.get(`/product?categoryId=${query}`, { params });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
