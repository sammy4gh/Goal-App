import { Schema } from "mongoose";
import { InitialStateType } from "./GlobalTypes";


export type GoalDataType = {
  text?: string
}

export type GoalType =  GoalDataType & {
  _id : string;
  user?: object | Schema.Types.ObjectId;
  createdAt: string
};



export type GoalStateType = InitialStateType & {
  goals: GoalType[] | never 
};
