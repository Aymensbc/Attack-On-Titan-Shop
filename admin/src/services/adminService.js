import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "/api/users/";

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    if (response.data.isAdmin) {
      localStorage.setItem("admin", JSON.stringify(response.data));
      return response.data;
    } else {
      toast.error("Only admin can login");
    }
  }
};

const adminService = {
  login,
};

export default adminService;
