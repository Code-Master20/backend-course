// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();

// normal approach to connect db

/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

//if-e function
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("application is not able to talk to the database", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`application is listening on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();


*/
