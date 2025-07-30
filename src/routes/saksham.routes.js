import express from "express";
import {
  createSaksham,
  getAllSaksham,
  getSakshamById,
} from "../controllers/saksham.controller.js";

const router = express.Router();

router.post("/", createSaksham);
router.get("/", getAllSaksham);
router.get("/:sakshamId", getSakshamById);

export default router;
