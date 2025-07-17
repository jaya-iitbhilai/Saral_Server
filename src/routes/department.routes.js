import express from "express";
const router = express.Router();
import {
  createDepartments,
  getDepartmentById,
  getDepartments,
} from "../controllers/department.controller.js";

router.post("/create-department", createDepartments);
router.get("/", getDepartments);
router.get("/:id", getDepartmentById);

export default router;
