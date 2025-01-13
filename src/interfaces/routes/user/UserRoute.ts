import express from "express";
import { UserController } from "../../controllers/UserController";

const userRoute = express.Router()

const userController = new UserController()

userRoute.get("/user", userController.getAll)

export default userRoute