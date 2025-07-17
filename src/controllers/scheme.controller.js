import { Scheme } from "../models/scheme.model.js";
import { Department } from "../models/department.model.js";

// 1. create schemes
export const createSchemes = async (req, res) => {
  const { departmentId } = req.params;
  const schemeData = req.body;

  try {
    // Check Validate department exists
    const department = await Department.findOne({ id: departmentId });

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    schemeData.departmentId = departmentId;

    //  Check if id already exists
    const existingScheme = await Scheme.findOne({ id: schemeData.id });

    if (existingScheme) {
      return res
        .status(409)
        .json({ message: "Scheme with this ID already exists" });
    }

    const newScheme = new Scheme(schemeData);

    await newScheme.save();

    res.status(201).json({
      message: "Scheme created successfully under department",
      scheme: newScheme,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get all Schemes
export const getSchemes = async (req, res) => {
  const schemes = await Scheme.find({ departmentId: req.params.departmentId });
  res.json({ schemes });
};

// 3. getSchemeById Get by id
export const getSchemeById = async (req, res) => {
  const scheme = await Scheme.findOne({
    departmentId: req.params.departmentId,
    id: req.params.schemeId,
  });
  if (scheme) res.json(scheme);
  else res.status(404).json({ error: "Not found" });
};
