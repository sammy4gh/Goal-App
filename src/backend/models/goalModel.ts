import mongoose, { Schema, model } from "mongoose";

type GoalSchema = {
  text: object;
};

const goalSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },

  { timestamps: true }
);

const goalModel = model<GoalSchema>("Goal", goalSchema);

export default goalModel;
