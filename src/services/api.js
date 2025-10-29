import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = "anything";
    console.log(token);

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export const ProductServices = {
  products: async () => {
    const res = await api.get("/products");
    return res.data;
  },
  productDetails: async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },
};
