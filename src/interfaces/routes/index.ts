import express from "express";
import userRoute from "./user/UserRoute";

export const routes = express.Router();

routes.use(userRoute);
