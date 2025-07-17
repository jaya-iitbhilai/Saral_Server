import mongoose from "mongoose";

const submitPaperSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    mobile: {
      type: String,
      required: true,
      match: /^\d{10}$/,
    },
    affiliation: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    paperTitle: {
      type: String,
      required: true,
    },
    uploadFile: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\.(pdf|docx|txt)$/.test(v);
        },
        message: "File must be a PDF, DOCX, or TXT",
      },
    },
    captcha: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9]{6}$/.test(v);
        },
        message: "Captcha must be a 6-character alphanumeric string",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const SubmitPaper = mongoose.model("SubmitPaper", submitPaperSchema);
