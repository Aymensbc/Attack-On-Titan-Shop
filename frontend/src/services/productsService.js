import axios from "axios";
const API_URL = "/api/products/";

const getProducts = async (category) => {
  try {
    let response;
    if (category) {
      response = await axios.get(API_URL + `?category=${category}`);
    } else {
      response = await axios.get(API_URL);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductDetail = async (id) => {
  try {
    const response = await axios.get(API_URL + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const productService = {
  getProducts,
  getProductDetail,
};

export default productService;
