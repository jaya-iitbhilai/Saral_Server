import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import submitPaperRoutes from "./routes/submitPaper.routes.js";
import authRoutes from "./routes/auth.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import schemeRoutes from "./routes/scheme.routes.js";
import careerRoutes from "./routes/career.routes.js";
import sakshamRoutes from "./routes/saksham.routes.js";

dotenv.config();
dotenv.config();
const app = express();

app.use(express.static("public"));

// Middleware
// parse json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set security HTTP headers
app.use(helmet());
app.use(morgan("dev"));

// enable cors
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:8081", "10.50.40.117"],
    credentials: true,
  })
);

// Routes
app.use("/api/submit-paper", submitPaperRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/saksham", sakshamRoutes);

export default app;
