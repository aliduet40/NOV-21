import { books } from "./bookController.js";
import { members } from "./memberController.js";

const regEXP = /^[1-9]\d*$/;

// Borrow a book
export const borrowBook = (req, res) => {
  const member_id = req.params.memberId;
  const book_id = req.params.bookId;

  // Validate memberId and bookId
  if (!regEXP.test(member_id

  ) || !regEXP.test(book_id)) {
    return res.status(400).json({ message: "Invalid memberId or bookId" });
  }

  const memberId = parseInt(member_id

  );
  const bookId = parseInt(book_id);

  const member = members.find(m => m.id === memberId);
  if (!member) return res.status(404).json({ message: "Member not found" });

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });

  
  // Check if book has copies available
  if (book.copies !== undefined && book.copies <= 0)
    return res.status(400).json({ message: "No copies available" });


  // Check if member already borrowed the book
  const alreadyBorrowed = member.borrowedBooks.find(b => b.bookId === bookId);
  if (alreadyBorrowed)
    return res.status(400).json({ message: "Book already borrowed by member" });


  // Add to member borrowedBooks
  member.borrowedBooks.push({ bookId, borrowedAt: new Date().toISOString() });

  // Decrease book copies
  if (book.copies !== undefined) book.copies--;

  res.json({ message: "Book borrowed successfully", member });
};


// Return a book
export const returnBook = (req, res) => {
  const member_id = req.params.memberId;
  const book_id = req.params.bookId;

  // Validate memberId and bookId
  if (!regEXP.test(member_id) || !regEXP.test(book_id)) {
    return res.status(400).json({ message: "Invalid memberId or bookId" });
  }

  const memberId = parseInt(member_id);
  const bookId = parseInt(book_id);

  const member = members.find(m => m.id === memberId);
  if (!member) return res.status(404).json({ message: "Member not found" });

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });

  // Check if member has borrowed the book
  const borrowedIndex = member.borrowedBooks.findIndex(b => b.bookId === bookId);
  if (borrowedIndex === -1)
    return res.status(400).json({ message: "Book not borrowed by member" });

  // Remove from borrowedBooks
  member.borrowedBooks.splice(borrowedIndex, 1);

  // Increase book copies
  if (book.copies !== undefined) book.copies++;

  res.json({ message: "Book returned successfully", member });
};


export const getOverdueBooks = (req, res) => {
  const today = new Date();
  const overdue = members.flatMap(member =>
    member.borrowedBooks
      .filter(b => (today - new Date(b.borrowedAt)) / (1000 * 60 * 60 * 24) > 7)
      .map(b => ({
        memberId: member.id,
        memberName: member.name,
        bookId: b.bookId,
        borrowedAt: b.borrowedAt,
        overdueByDays: Math.floor((today - new Date(b.borrowedAt)) / (1000 * 60 * 60 * 24)) - 7
      }))
  );

  res.json(overdue.length ? { overdue } : { message: "No overdue books found" });
};

