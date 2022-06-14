import axios from "axios";
const API_URL = "/api/users/";

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

const userService = {
  login,
};

export default userService;
