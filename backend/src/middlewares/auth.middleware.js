import { verifyToken } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);

        // decoded contains:
        // { userId, email, global_role }
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
