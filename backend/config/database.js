import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectDatabase = async () => {
    mongoose.set('strictQuery', true);
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log(`MongoDB connected to ${mongoose.connection.host}`);
    } catch (err) {
      console.error(err);
    }
  };
  
