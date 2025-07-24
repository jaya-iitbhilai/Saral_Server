import { log } from "console";
import Career from "../models/career.model.js";

// Create new career option
// export const createCareer = async (req, res) => {
//   try {
//     const newCareer = new Career(req.body);
//     console.log("newCareer", newCareer);

//     const saved = await newCareer.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

export const createCareer = async (req, res) => {
  try {
    // console.log("req.file", req);
    // console.log("upload file", req.body.uploadFile);
    // const filePath = req.body.uploadFile
    //   ? `/images/uploads/${req.body.uploadFile}`
    //   : null;

    const filePath = req.file ? `/images/uploads/${req.file.filename}` : null;
    console.log("filePath", filePath);
    // "/images/uploads",
    //   express.static(path.join(process.cwd(), "public/images/uploads"))

    // const newCareer = new Career(req.body);
    const newCareer = new Career({
      ...req.body,
      // interests: req.body["interests[]"], // handle array properly
      // examStructure: JSON.parse(JSON.stringify(req.body.examStructure)),
      image: filePath, // match this with your schema field
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

// Filter by eligibility or careerType
// export const getByFilter = async (req, res) => {
//   const { eligibility, careerType } = req.query;
//   try {
//     const query = {};
//     if (eligibility) query.eligibility = eligibility;
//     if (careerType) query.careerType = careerType;

//     const result = await Career.find(query);
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// get filter by currentStatus
// export const getCareersByStatus = async (req, res) => {
//   try {
//     const { status } = req.query;

//     if (!status || !["Education", "Job", "Business"].includes(status)) {
//       return res
//         .status(400)
//         .json({ message: "Invalid or missing status parameter" });
//     }

//     const careers = await Career.find({ currentStatus: status });
//     return res.status(200).json(careers);
//   } catch (error) {
//     return res.status(500).json({ message: "Server error", error });
//   }
// };

// GET /api/careers?id=Education OR Job OR Business
export const getCareersByStatus = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("id", id);

    const allowedStatuses = ["Education", "Job", "Business"];

    if (!id || !allowedStatuses.includes(id)) {
      return res.status(400).json({
        message:
          "Invalid or missing id parameter. Only Education, Job, or Business are allowed.",
      });
    }

    // Debug log
    console.log("Filtering for status:", id);

    const careers = await Career.find({ currentStatus: id });
    console.log("careers", careers);

    return res.status(200).json(careers);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
