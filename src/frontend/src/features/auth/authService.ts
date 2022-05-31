import axios from "axios";
import { UserSchemaType, UserType } from "../../../../Types/UserTypes";

const API_URL = "/api/users/";

//Register user
const register = async (userData: UserType) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
