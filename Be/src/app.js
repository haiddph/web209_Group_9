import express from "express";

import cors from "cors";

import mongoose from "mongoose";
const app = express();

// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());
app.use(cors());
// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
//db online
mongoose.connect("");

export const viteNodeApp = app;