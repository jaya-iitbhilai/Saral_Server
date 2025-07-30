import express from "express";
const router = express.Router();
import {
  createDepartments,
  getDepartmentById,
  getDepartments,
} from "../controllers/department.controller.js";
import { upload } from "../middleware/uploadFile.js";

router.post("/create-department", upload.single("icon"), createDepartments);
router.get("/", getDepartments);
router.get("/:id", getDepartmentById);

export default router;
