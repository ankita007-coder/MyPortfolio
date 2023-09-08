import express from "express"; 
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from 'url';

export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

// Go up one level to the root directory and then descend into 'frontend' directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Go up one level to the root directory and then descend into 'frontend' directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});
