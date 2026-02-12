import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/", route);

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Server is running"
    })
})

export default app;