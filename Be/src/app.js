import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import RouterCategories from "./routes/category";

// Config
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// connect
app.use("/api", RouterCategories);
mongoose
  .connect("mongodb://127.0.0.1:27017/nodejs-React")
  .then(() => {
    console.log("DB is connected");
  })
  .catch(() => {
    console.log("Error connecting");
  });

export const viteNodeApp = app;
