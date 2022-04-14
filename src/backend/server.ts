import express, { Application, Request, Response, NextFunction } from "express";
import colors from "colors"
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes";
import { errorHandler } from "./middleWare/errorMiddleware";
import connectDB from "./config/db";

const port = process.env.PORT || 5000;

connectDB().then(r => console.log(`MongoDB Connected : ${r}`))

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
