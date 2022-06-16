import axios from "axios";
import { UserSchemaType, UserType } from "../../../../../Types/UserTypes";

const API_URL = "/api/users/";
type RegisterType = {
  userData: UserType;
};
//Register user
const register = async (userData: UserType) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (response.data || !response.data.messge) {
      console.log("response", response);
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("error messsage", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error.message);
      return "An unexpected error occured";
    }
  }

};

//Login user
const login = async (userData: UserType) => {

  try {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data || !response.data.messge) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;

  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("error messsage", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error.message);
      return "An unexpected error occured";
    }
  }
};
//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
