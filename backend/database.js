import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Function to connect to the MongoDB database
export const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://ankitabudhia:anku030205@cluster0.r1w1rrq.mongodb.net/portfolio?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to ${mongoose.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
