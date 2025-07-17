import express from "express";
import {
  createCareer,
  getAllCareers,
} from "../controllers/career.controller.js";

const router = express.Router();

router.post("/", createCareer);
router.get("/", getAllCareers);

export default router;
