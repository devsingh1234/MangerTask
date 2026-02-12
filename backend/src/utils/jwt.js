import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const EXPIRE_TIME = "1d";

const JWT_SECRET = process.env.JWT_SECRET;

export const signToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: EXPIRE_TIME
    });
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}