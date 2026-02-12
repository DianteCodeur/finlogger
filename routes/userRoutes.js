import express from "express";
import { getUserIncome } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUserIncome);

export default userRouter;
