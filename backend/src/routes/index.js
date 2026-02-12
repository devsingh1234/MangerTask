import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import teamRoutes from "../modules/teams/team.routes.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/teams", teamRoutes);

export default router;