import { Router } from "express";
import { createTeam } from "./team.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authenticate, createTeam);

export default router;
