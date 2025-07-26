import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    currentStatus: {
      type: String,
      required: true,
      enum: ["Education", "Job", "Business"],
    },
    currentEducation: [
      {
        type: String,
        required: true,
        enum: [
          "class-5",
          "class-6",
          "class-7",
          "class-8",
          "class-9",
          "class-10",
          "class-11",
          "class-12",
          "graduation",
          "post-graduation",
          "working",
          "phd",
          "diploma",
        ],
      },
    ],
    stream: {
      type: String,
      enum: [
        "science",
        "m.tech",
        "arts",
        "education",
        "government jobs",
        "not-applicable",
      ],
      default: "not-applicable",
    },
    interests: [
      {
        type: String,
        enum: [
          "Technology",
          "Teaching",
          "Research",
          "Academics",
          "Education",
          "Primary School",
          "Government Jobs",
          "Administration",
          "Lecturer",
          "Assistant Professor",
          "Higher Education",
          "Defense",
          "Banking",
          "Railways",
          "Healthcare",
          "Engineering",
          "Law",
          "Agriculture",
          "Full-time",
          "Part-time",
          "Contract",
          "Freelance",
          "Internship",
          "Apprenticeship",
          "Franchise",
          "Cooperative",
          "Partnership",
          "Science",
        ],
      },
    ],
    examType: {
      type: {
        hi: {
          type: String,
          enum: [
            "भाग-1 प्रवेश एवं छात्रवृत्ति हेतु प्रवेश परीक्षा",
            "भाग-02 पात्रता परीक्षा",
            "भाग-03 छत्तीसगढ़ लोक सेवा आयोग द्वारा आयोजित परीक्षायें",
            "भाग-04 संघ लोक सेवा आयोग द्वारा आयोजित परीक्षायें",
            "भाग-05 भारतीय सैन्य बलों में भर्ती हेतु प्रतियोगी परीक्षायें",
            "भाग-06 बैंकों में अधिकारी एवं क्लर्क भर्ती की परीक्षायें",
            "भाग-07 कर्मचारी चयन आयोग द्वारा आयोजित परीक्षायें",
            "भाग-08 LIC में भर्ती परीक्षायें ",
            "भाग-09 रेल्वे (RRB) भर्ती की प्रतियोगी परीक्षायें",
            "भाग-10 छ.ग. व्यापम द्वारा आयोजित भर्ती प्रतियोगी परीक्षायें",
            "भाग-11 अन्य भर्ती परीक्षायें एवं शिक्षा ऋण, दिव्यांगजनों के लिये शासन की योजनाएं तथा ऑनलाईन रोजगार पंजीयन",
          ],
          required: true,
        },
        en: {
          type: String,
          enum: [
            "Part-1 Entrance exam for admission and scholarship",
            "Part-2 Eligibility Examinations",
            "Part-3 Examinations conducted by Chhattisgarh Public Service Commission",
            "Part-4 Examinations conducted by Union Public Service Commission",
            "Part-5 Competitive examinations for recruitment in Indian Armed Forces",
            "Part-6 Bank officer and clerk recruitment examinations",
            "Part-7 Examinations conducted by Staff Selection Commission (SSC)",
            "Part-8 LIC recruitment examinations",
            "Part-9 Railway (RRB) recruitment competitive examinations",
            "Part-10 Competitive examinations conducted by CG Vyapam",
            "Part-11 Other recruitment exams, education loans, government schemes for persons with disabilities, and online employment registration",
          ],
          required: true,
        },
      },
    },

    id: { type: String },
    title: {
      en: { type: String, required: true },
      hi: { type: String, required: true },
    },
    websiteLink: { type: String },
    description: {
      en: { type: String, required: true },
      hi: { type: String, required: true },
    },
    eligibility: { en: { type: String }, hi: { type: String } },
    applicationProcess: { en: { type: String }, hi: { type: String } },
    examPattern: { en: { type: String }, hi: { type: String } },
    examStructure: [
      {
        subject: {
          en: { type: String, required: true },
          hi: { type: String, required: true },
        },
        questions: { type: Number, required: true },
        marks: { type: Number, required: true },
        duration: { type: String },
      },
    ],
    specialNotes: { en: { type: String }, hi: { type: String } },
    reservation: { en: { type: String }, hi: { type: String } },
    contact: { en: { type: String }, hi: { type: String } },
    uploadFile: { type: String },
  },
  { timestamps: true }
);

const Career = mongoose.model("Career", careerSchema);
export default Career;
