import mongoose from "mongoose";

const sakshamSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
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
      phone: [{ type: String }],
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
    website: { type: String },
    status: { type: String },
    lastUpdated: { type: String },
    notices: {
      en: [{ type: String }],
      hi: [{ type: String }],
    },
  },
  { timestamps: true }
);

export const Saksham = mongoose.model("Saksham", sakshamSchema);
