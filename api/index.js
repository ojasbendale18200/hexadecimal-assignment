import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
import usersRoute from "../api/routes/users.js";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DBconeection successful");
  } catch (error) {
    throw error;
  }
};

// middleware
app.use(express.json());
app.use("/api/users", usersRoute);
app.listen(8000, () => {
  connect();
  console.log("Server running on Port 8000");
});
