import api from "../configs/config";

export const getAllCategory = () => {
  return api.get("/category");
};

export const getAllProduct = (params) => {
  const res = api.get("/product", { params }).then((res) => res.data);
  return res;
};
