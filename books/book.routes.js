import express from "express";
import {
  getAllBooks,
  getCertainBook,
  createNewBook,
  deleteBookById,
  updateBookById,
} from "./book.controller.js";

const router = express.Router();

// Get books
router.get("/", getAllBooks);
// Get the certain book by id
router.get("/:id", getCertainBook);
// Add the new book
router.post("/", createNewBook);
// Delete the book by id
router.delete("/:id", deleteBookById);
// Update the book
router.put("/:id", updateBookById);

export default router;
