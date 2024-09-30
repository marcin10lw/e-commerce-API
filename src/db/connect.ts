import mongoose from "mongoose";

export const connectDb = async () => {
  return mongoose.connect(process.env.DATABASE_URL!);
};
