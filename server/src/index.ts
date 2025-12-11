import express from "express";
import type { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records.ts"
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI = process.env.MONGO_URI as string;

mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Failed to connect to mongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})