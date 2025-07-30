import { Department } from "../models/department.model.js";

// export const createDepartments = async (req, res) => {
//   try {
//     const departments = await Department.insertMany(req.body.departments);
//     res.status(201).json({ success: true, data: departments });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// 1. Create departments
export const createDepartments = async (req, res) => {
  try {
    // 1. Handle image upload from 'icon' field
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No icon image uploaded" });
    }

    // 2. Generate icon URL from uploaded file
    const iconUrl = `/deptImages/${req.file.filename}`;
    console.log("iconUrl", iconUrl);

    req.body.icon = iconUrl;

    // 3. Parse JSON fields
    const parseIfJson = (field) => {
      if (req.body[field]) {
        try {
          req.body[field] = JSON.parse(req.body[field]);
        } catch (err) {
          return res
            .status(400)
            .json({ success: false, message: `Invalid JSON in ${field}` });
        }
      }
    };

    ["name", "description", "contact", "office", "personsOfContact"].forEach(
      parseIfJson
    );

    // 3. Check if department with same ID exists
    const existing = await Department.findOne({ id: req.body.id });
    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Department ID already exists" });
    }

    // 4. Create new department
    const department = await Department.create(req.body);
    res.status(201).json({ success: true, data: department });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 2. Get all departments
export const getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.json({ departments });
};

// 3. Get one department by ID
export const getDepartmentById = async (req, res) => {
  const department = await Department.findOne({ id: req.params.id });
  if (department) res.json(department);
  else res.status(404).json({ error: "Not found" });
};
