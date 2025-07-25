import Career from "../models/career.model.js";

export const createCareer = async (req, res) => {
  try {
    const uploadFile = req.file ? req.file.filename : null;
    const newCareer = new Career({
      ...req.body,
      uploadFile,
    });

    const saved = await newCareer.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Career creation failed:", err);
    res.status(400).json({ error: err.message, details: err.errors || null });
  }
};

// Get all career options
export const getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json(careers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/careers?id=Education OR Job OR Business
export const getCareersByStatus = async (req, res) => {
  try {
    const { id } = req.query;

    const allowedStatuses = ["Education", "Job", "Business"];

    if (!id || !allowedStatuses.includes(id)) {
      return res.status(400).json({
        message:
          "Invalid or missing id parameter. Only Education, Job, or Business are allowed.",
      });
    }

    const careers = await Career.find({ currentStatus: id });

    return res.status(200).json(careers);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
