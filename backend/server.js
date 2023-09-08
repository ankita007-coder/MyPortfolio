import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";
import cors from "cors"; // Import the CORS middleware

const PORT = process.env.PORT || 5000;
dotenv.config();

connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use the CORS middleware before defining other routes
app.use(cors());

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
