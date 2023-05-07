import express from "express";
import { getAllUsers } from "./user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
