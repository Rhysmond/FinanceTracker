import express from "express";
import type { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
    "mongodb+srv://chengrhysmond_db_user:kq1d9vcPfbk5jon3@personalfinancetracker.eheq1pj.mongodb.net/?appName=PersonalFinanceTracker";

mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Failed to connect to mongoDB:", err));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})