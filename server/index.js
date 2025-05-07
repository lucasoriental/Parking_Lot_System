import express from "express";
import cors from "cors";
import "./config/env.config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/parking", (r,q) => {q.send("Olá"); console.log("ola")});

app.listen(PORT); //Required

