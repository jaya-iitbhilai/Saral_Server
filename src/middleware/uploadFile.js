import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, "./public/images/uploads");
  // },
  destination: function (req, file, cb) {
    // File type check using MIME type
    if (file.mimetype === "application/pdf") {
      cb(null, "./public/images/uploads"); // PDF folder
    } else if (file.mimetype.startsWith("image/")) {
      cb(null, "./public/deptImages"); // Image folder
    } else {
      cb(new Error("Unsupported file type"), false);
    }
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytes) {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

export const upload = multer({ storage: storage });
