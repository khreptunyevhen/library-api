import express from "express";
import {
  getAllUsers,
  addNewUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from "./user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addNewUser);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

export default router;
