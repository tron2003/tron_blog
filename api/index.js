import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js";
const app = express();

dotenv.config();
app.use(express.json())
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Port running on 3000 !");
});
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)