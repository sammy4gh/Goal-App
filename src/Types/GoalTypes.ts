import { Schema } from "mongoose";

export type GoalSchemaType = {
  user: Schema.Types.ObjectId;
  text: string;
};
