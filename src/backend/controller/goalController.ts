import { Request, Response, Handler } from "express";
import goalModel from "../models/goalModel";
import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModels";

const Goal = goalModel;
const User = userModel
//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    // @ts-ignore
      const goals = await Goal.find({user :req.user.id});
    res.status(200).json(goals);
  }
);

//@desc Set goals
//@route POST /api/goals
//@access  Private
const setGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error("Please add a text field");
    }

      const goal = await Goal.create({
      text: req.body.text,
          // @ts-ignore
        user :req.user.id
    });
    res.status(200).json(goal);
  }
);

//@desc Update goals
//@route PUT /api/goals:id
//@access  Private
const updateGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }

    // @ts-ignore
      const user = await User.findById(req.user.id)

      //Check for user
      if (!user){
          res.status(401)
          throw new Error('User not found')
      }

      //Make sure logged-in user matches the goal user
      if(goal.user.toString() !== user.id){
        res.status(401)
          throw new Error('User not authorized')
      }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedGoal);
  }
);

//@desc Delete goals
//@route DELETE /api/goals:id
//@access  Private
const deleteGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }

      // @ts-ignore
      const user = await User.findById(req.user.id)

      //Check for user
      if (!user){
          res.status(401)
          throw new Error('User not found')
      }

      //Make sure logged-in user matches the goal user
      if(goal.user.toString() !== user.id){
          res.status(401)
          throw new Error('User not authorized')
      }

    await goal.remove();
    res.status(200).json({ id: req.params.id });
  }
);

export { getGoal, setGoal, updateGoal, deleteGoal };
