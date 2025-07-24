// // import multer from "multer";
// // import path from "path";

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   },
// // });

// // const fileFilter = (req, file, cb) => {
// //   const allowedTypes = /pdf|docx|txt|png|jpg/;

// //   const ext = path.extname(file.originalname).toLowerCase();
// //   if (allowedTypes.test(ext)) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error("Only PDF, DOCX, TXT, PNG, or JPG files are allowed"));
// //   }
// // };

// // export const upload = multer({ storage, fileFilter });

// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// // Fix for __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // uploads path outside src/
// const uploadFolder = path.join(__dirname, "..", "uploads");
// console.log("uploadFolder....", uploadFolder);

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadFolder);
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytes) {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

export const upload = multer({ storage: storage });
