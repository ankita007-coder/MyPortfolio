import { app } from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import cors from "cors"; // Import the 'cors' package

import { connectDatabase } from "./database.js";

const PORT = process.env.PORT || 5000;

dotenv.config(); // Load environment variables from .env file

connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure CORS before your app's routes
app.use(cors({
  origin: 'https://ankitabudhia.onrender.com',
  credentials: true, // Allow credentials like cookies
}));

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
