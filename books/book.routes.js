import express from "express";
import {
  getAllBooks,
  getCertainBook,
  createNewBook,
} from "./book.controller.js";

const router = express.Router();

// Get books
router.get("/", getAllBooks);
// Get the certain book by id
router.get("/:id", getCertainBook);
// Add the new book
router.post("/", createNewBook);

export default router;
