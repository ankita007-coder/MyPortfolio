import { app } from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

import { connectDatabase } from "./database.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
