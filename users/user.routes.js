import express from "express";
import {
  getAllUsers,
  addNewUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from "./user.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth("read"), getAllUsers);
router.get("/:id", getUserById);
router.post("/", addNewUser);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

export default router;
