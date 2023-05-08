import express from "express";
import { getAllUsers, addNewUser } from "./user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addNewUser);

export default router;
