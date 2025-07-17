import app from "./app.js";
import colors from "colors";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8001;

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`.bgBlue);
    });
  })
  .catch((err) => {
    console.error("DB not connected!", err);
  });
