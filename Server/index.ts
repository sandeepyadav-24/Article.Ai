import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.listen(port, () => {
  console.log(`Post is listening at Port : ${port}`);
});

mongoose.connect(
  "mongodb+srv://sandeepyadav004343:BZjE52Gw047ICjWB@cluster0.cvdvall.mongodb.net/"
);
