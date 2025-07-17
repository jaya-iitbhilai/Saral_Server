import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema({
  departmentId: String,
  id: String,
  name: {
    en: { type: String },
    hi: { type: String },
  },
  description: {
    en: { type: String },
    hi: { type: String },
  },
  benefits: {
    en: [{ type: String }],
    hi: [{ type: String }],
  },
  eligibility: {
    en: [{ type: String }],
    hi: [{ type: String }],
  },
  contact: {
    phone: { type: String },
    email: { type: String },
    office: {
      en: { type: String },
      hi: { type: String },
    },
  },
  documents: {
    en: [{ type: String }],
    hi: [{ type: String }],
  },
  guidelines: {
    en: [{ type: String }],
    hi: [{ type: String }],
  },
  website: { type: String },
  status: { type: String },
  lastUpdated: { type: String },
  notices: {
    en: [{ type: String }],
    hi: [{ type: String }],
  },
});

export const Scheme = mongoose.model("Department-Scheme", schemeSchema);
