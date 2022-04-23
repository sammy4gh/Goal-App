import mongoose, { Schema, model } from "mongoose";
import { GoalSchemaType } from "../../Types/GoalTypes";

const goalSchema = new Schema<GoalSchemaType>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },

  { timestamps: true }
);

const goalModel = model<GoalSchemaType>("Goal", goalSchema);

export default goalModel;
