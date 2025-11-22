import express from "express";

import { borrowBook, returnBook , getOverdueBooks } from "../controllers/borrowController.js";

const router = express.Router();

// Borrow a book
router.post("/borrow/:memberId/:bookId", borrowBook);

// Return a book
router.post("/return/:memberId/:bookId", returnBook);

router.get("/overdue", getOverdueBooks);

export default router;
