export let books = [
    { id: 101, title: "Atomic Habits", author: "James Clear", year: 2022, copies: 4 },
    { id: 102, title: "Pathology", author: "James henry", year: 2012, copies: 14 },
    { id: 103, title: "Zoology", author: "kiosaki", year: 2010, copies: 5 },
    { id: 104, title: "Anatomy", author: "Albert Enisten", year: 1993, copies: 8 },
    { id: 105, title: "Environmental Biology", author: "Dawidson", year: 2020, copies: 3 },
    { id: 108, title: "Biotechnology", author: "kumar signh", year: 2024, copies: 13 },
];

// add a helper
const simulateDelay = (data, delay = 1000) => {
    return new Promise((resolve) => setTimeout(() => resolve(data), delay));
};


// Add a new book
export const addBook = async (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        copies: req.body.copies
    };

    await simulateDelay();  // simulate 1 second delay
    books.push(newBook);
    res.status(200).json({ message: "Book added", data: newBook });
};


// Get all books
export const getAllBooks = async (req, res) => {
    const data = await simulateDelay(books, 1000); // 1 sec delay
    res.json(data);
};


// Get book by ID
export const getBookById = async (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    await simulateDelay(); // optional delay

    book
        ? res.json(book)
        : res.status(404).json({ message: "Book not found" });
};


// Update book
export const updateBook = async (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    await simulateDelay(); // simulate delay

    if (!book) return res.status(404).json({ message: "Book not found" });

    book.title = req.body.title ?? book.title;
    book.author = req.body.author ?? book.author;

    res.json({ message: "Book updated", data: book });
};


// Delete book
export const deleteBook = async (req, res) => {
    await simulateDelay(); // simulate delay
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.json({ message: "Book deleted" });
};


// Search books by title or author
export const searchBooks = (req, res) => {
    const query = (req.query.query || "").toLowerCase();
  
    const result = books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
  
    result.length
      ? res.json(result)
      : res.status(404).json({ message: "Book not found" });
  };
  




  

