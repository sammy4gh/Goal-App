import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { GoalDataType, GoalType } from "../../../../../Types/GoalTypes";

const API_URL = "api/goals/";

const createGoal = async (goalData: GoalDataType, token: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, goalData, config);

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
const getGoals = async (token: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL, config);

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

//Delete goal
const deleteGoal = async (goalId:string, token: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(API_URL +goalId, config);

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

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
