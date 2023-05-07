// import db from "../data/db.json" assert { type: "json" };
import { db } from "../data/db.js";

export async function getBooks() {
  return db?.data?.books;
}

export async function getBookById(bookId) {
  const book = db?.data?.books[bookId];

  return book;
}

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

export async function updateBook() {}

export async function deleteBook(bookId) {
  const books = db?.data?.books;

  if (bookId > books.length) {
    console.error("BookId is greater than the length of the books.");
    return;
  }

  books.splice(bookId - 1, 1);

  db.write();
  return books;
}
