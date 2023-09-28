import api from "../configs/config";

export const getAllCategory = () => {
  return api.get("/category");
};

export const getAllProduct = () => {
  return api.get("/product");
};
