import { Saksham } from "../models/saksham.model.js";

// 1. Create Saksham
export const createSaksham = async (req, res) => {
  try {
    console.log("create req---", req.body);
    const existing = await Saksham.findOne({ id: req.body.id });
    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Saksham ID already exists" });
    }
    const saksham = await Saksham.create(req.body);
    res.status(201).json({
      success: true,
      message: "Successfully created Saksham data",
      data: saksham,
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

// 2. Get all
export const getAllSaksham = async (req, res) => {
  try {
    console.log("create req---", req.body);
    const sakshams = await Saksham.find();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all Saksham data",
      data: sakshams,
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

// 3. Get By Id
export const getSakshamById = async (req, res) => {
  try {
    const { sakshamId } = req.params;
    console.log("by-param---", req.params);
    if (!sakshamId) {
      return res
        .status(400)
        .json({ success: false, message: "Id is required" });
    }
    const saksham = await Saksham.findOne({ id: sakshamId });
    if (!saksham) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched Saksham data",
      data: saksham,
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};
