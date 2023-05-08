import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";

dotenv.config();
const app = express();
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (error) {
    throw error;
  }
};

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected!");
});
app.use(express.json());
app.use("/api/create", bookRoute);
app.listen(8000, () => {
  connect();
  console.log("port running");
});
