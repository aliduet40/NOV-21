import express from "express";
import {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBook); // add a new book
router.get("/", getAllBooks); // fetch all books
router.get("/search", searchBooks); // searching books list
router.get("/:id", getBookById); // get single book by id
router.put("/:id", updateBook); // update a book
router.delete("/:id", deleteBook); // delete a book

export default router;

