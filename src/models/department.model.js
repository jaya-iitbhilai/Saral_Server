import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    phone: String,
    email: String,
    helpline: String,
  },
  { _id: false }
);

const addressSchema = new mongoose.Schema(
  {
    en: String,
    hi: String,
  },
  { _id: false }
);

const personSchema = new mongoose.Schema(
  {
    name: String,
    designation: {
      en: String,
      hi: String,
    },
    phone: String,
    email: String,
  },
  { _id: false }
);

const departmentSchema = new mongoose.Schema(
  {
    id: String,
    icon: String,
    name: {
      en: String,
      hi: String,
    },
    description: {
      en: String,
      hi: String,
    },
    website: String,
    contact: contactSchema,
    office: {
      address: addressSchema,
      pincode: String,
    },
    personsOfContact: [personSchema],
  },
  { timestamps: true }
);

export const Department = mongoose.model("Department", departmentSchema);
