import express from "express";
import { getAllUsers, addNewUser, getUserById } from "./user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addNewUser);

export default router;
