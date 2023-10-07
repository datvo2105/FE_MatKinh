import api from "../configs/config";

export const getAllBlog = async () => {
  const res = await api.get("/blog");
  return res.data;
};

export const getBlog = async (id) => {
  const res = await api.get(`/blog/${id}`);
  return res.data;
};
