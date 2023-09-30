import api from "../configs/config";

export const getAllCategory = () => {
  return api.get("/category");
};

export const getOneProduct = async (id) => {
  const res = await api.get(`/product/${id}`).then((res) => res.data);
  return res;
};

export const getAllProduct = async ({ params }) => {
  const res = await api.get("/product", { params }).then((res) => res?.data);
  return res.data;
};

export const filterByCategory = async (query) => {
  const res = await api
    .get(`/product?categoryId=${query}`)
    .then((res) => res?.data);
  return res.data;
};
