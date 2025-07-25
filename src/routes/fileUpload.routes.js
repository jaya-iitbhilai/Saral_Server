import express from "express";
import upload from "../middleware/uploadFile.js";

const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filePath = `/uploads/${req.file.filename}`;

  res.status(200).json({ message: "File uploaded successfully", filePath });
});

export default router;
