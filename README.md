# Library Management System

A simple **Node.js + Express** application to manage a library.  
It supports managing **books**, **members**, and **borrowing/returning books**. All data is stored **in-memory** (no database).

##  Features

### Books
- Add a new book
- Get all books
- Get book by ID
- Update book
- Delete book
- Search books by title or author

### Members
- Add a new member
- Get all members
- Get member by ID
- Update member
- Delete member

### Borrow / Return
- Borrow a book
- Return a book
- List overdue books (borrow duration 7 days)

### Extra Features
- Async simulation using `setTimeout`
- Validation for borrow/return
- Case-insensitive search

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/YourUsername/library-management-system.git
cd library-management-system
