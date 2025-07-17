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
    const existing = await Department.findOne({ id: req.body.id });
    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Department ID already exists" });
    }

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
