// import db from "../data/db.json" assert { type: "json" };
import { db } from "../data/db.js";

// Get the list with all books
export async function getBooks() {
  return db?.data?.books;
}

// Get the book by id
export async function getBookById(bookId) {
  const book = db?.data?.books[bookId];

  return book;
}

// Create the new book
export async function addBook(newBook) {
  const { title, author } = newBook;
  const published = new Date();
  // Just for the project use new Date().getTime() for the unique number
  const isbn = new Date().getTime().toString();

  const book = {
    isbn,
    title,
    author,
    published,
  };
  const books = db?.data?.books;
  books.push(book);

  db.write();
  return books;
}
