import { Router } from "express";
import ResourceController from "../controllers/resource.controller";

  const router = Router();

  //Create resource
  router.post("/create", ResourceController.create.bind(ResourceController));

  //Get all resource
  router.get("/", ResourceController.getAll.bind(ResourceController));

  // Get detail resource
  router.get(
    "/:id([0-9]+)",
    ResourceController.getDetail.bind(ResourceController)
  );
 
  // Update resource
  router.post("/update", ResourceController.update.bind(ResourceController));

  // Delete resource
  router.post("/delete", ResourceController.delete.bind(ResourceController));

  export default router;