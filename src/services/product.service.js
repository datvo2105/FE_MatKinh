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

export const getAllProduct = async ({ params }) => {
  try {
    const res = await api.get("/product", { params }).then((res) => res?.data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const filterByCategory = async (query) => {
  try {
    const res = await api
      .get(`/product?categoryId=${query}`)
      .then((res) => res?.data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
