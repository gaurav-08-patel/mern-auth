import express from "express";
import { signup } from "../controllers/auth.controller.js";
let router = express.Router();

router.post("/signup", signup);

export default router;
