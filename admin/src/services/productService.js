import axios from "axios";

const API_URL = "/api/products";

const addProduct = async (productDetail) => {
  const response = await axios.post(API_URL, productDetail);

  if (response.data) return response.data;
};

const productService = {
  addProduct,
};

export default productService;
