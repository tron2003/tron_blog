import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();

dotenv.config();

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
