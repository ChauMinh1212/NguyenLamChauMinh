import { Router, Request, Response } from "express";
import resourceRouter from './resource.route'

const routes = Router();

routes.use("/resource", resourceRouter);

export default routes;