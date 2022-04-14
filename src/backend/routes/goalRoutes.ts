import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import {
  deleteGoal,
  getGoal,
  setGoal,
  updateGoal,
} from "../controller/goalController";

const router: Router = express.Router();
router.route("/").get(getGoal).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

export default router;
