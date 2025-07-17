import express from "express";
import { createSubmission } from "../controllers/submitPaper.controller.js";
import { upload } from "../middleware/uploadFile.js";

const router = express.Router();

router.post("/", upload.single("uploadFile"), createSubmission);

export default router;
