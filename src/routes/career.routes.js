import express from "express";
import {
  createCareer,
  getAllCareers,
  getCareersByStatus,
} from "../controllers/career.controller.js";
import Career from "../models/career.model.js";
import { upload } from "../middleware/uploadFile.js";

const router = express.Router();

router.post("/", upload.single("uploadFile"), createCareer);
router.get("/", getCareersByStatus);
router.get("/:id", async (req, res) => {
  try {
    const career = await Career.findOne({ id: req.params.id });

    if (!career) {
      return res.status(404).json({ message: "Career not found" });
    }

    res.json(career);
  } catch (error) {
    console.error("Error in GET /api/careers/:id", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

export default router;
