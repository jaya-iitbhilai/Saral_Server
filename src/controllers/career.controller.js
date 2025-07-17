import Career from "../models/career.model.js";

// Create new career option
export const createCareer = async (req, res) => {
  try {
    const newCareer = new Career(req.body);
    console.log("newCareer", newCareer);

    const saved = await newCareer.save();
    res.status(201).json(newCareer);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
export const getByFilter = async (req, res) => {
  const { eligibility, careerType } = req.query;
  try {
    const query = {};
    if (eligibility) query.eligibility = eligibility;
    if (careerType) query.careerType = careerType;

    const result = await Career.find(query);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
