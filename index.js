// const express = require("express");
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { urlRouter } from "./routes/shorturls.js";
import { userRouter } from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const url =`mongodb+srv://prasanna:prasanna98@cluster0.nx947.mongodb.net/url`;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (request, respone) => {
  respone.send("Welcome to UrlShortner.....");
});

app.use("/users", userRouter);

app.use("/url", urlRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));
