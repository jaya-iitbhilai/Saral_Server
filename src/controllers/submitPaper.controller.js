import { SubmitPaper } from "../models/submitPaper.model.js";

export const createSubmission = async (req, res) => {
  try {
    const uploadFile = req.file ? req.file.filename : null;

    const submissionData = {
      ...req.body,
      uploadFile,
    };

    const submission = new SubmitPaper(submissionData);
    await submission.save();
    res.status(201).json({
      success: true,
      message: "Paper submitted successfully",
      data: submission,
    });
  } catch (error) {
    console.log("Error in handleSubmitPaper:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
