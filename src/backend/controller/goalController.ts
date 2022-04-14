import { Request, Response, Handler } from "express";
import goalModel from "../models/goalModel";
import expressAsyncHandler from "express-async-handler";

const Goal = goalModel;
//@desc Get goals
//@route GET /api/goals
//Access Private
const getGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
  }
);

//@desc Set goals
//@route POST /api/goals
//Access Private
const setGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error("Please add a text field");
    }
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(200).json(goal);
  }
);

//@desc Update goals
//@route PUT /api/goals:id
//Access Private
const updateGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedGoal);
  }
);

//@desc Delete goals
//@route DELETE /api/goals:id
//Access Private
const deleteGoal: Handler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }

    await goal.remove();
    res.status(200).json({ id: req.params.id });
  }
);

export { getGoal, setGoal, updateGoal, deleteGoal };
