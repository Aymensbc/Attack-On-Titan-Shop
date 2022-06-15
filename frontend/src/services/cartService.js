import axios from "axios";
const API_URL = "/api/cart/";

const getUserCart = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  if (response.data) {
    localStorage.setItem("cart", JSON.stringify(response.data));
  }
  return response.data;
};

const addToCart = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, productData, config);
  if (response.data) {
    localStorage.setItem("cart", JSON.stringify(response.data));
  }
  return response.data;
};

const deleteFromCart = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + productId, config);
  if (response.data) {
    localStorage.setItem("cart", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};

const cartService = {
  getUserCart,
  addToCart,
  deleteFromCart,
};

export default cartService;
