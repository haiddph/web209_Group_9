import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
//db online
mongoose.connect("");

export const viteNodeApp = app;