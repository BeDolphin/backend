// require('dotenv').config({path: './env'})
import { app } from "./app.js";

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed:", err);
  });

/* //1st approach

import express from "express";
const app = express;

(async () => {
  try {
    await mongoose.connect(`&{process.env.MONGIDB_URI} / {DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`APP is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
})();

*/
