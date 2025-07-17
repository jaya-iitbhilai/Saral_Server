import express from "express";
const router = express.Router();
import {
  createSchemes,
  getSchemeById,
  getSchemes,
} from "../controllers/scheme.controller.js";

router.post("/create-scheme/:departmentId", createSchemes);
router.get("/:departmentId", getSchemes);
router.get("/:departmentId/:schemeId", getSchemeById);

export default router;
