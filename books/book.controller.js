import {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../services/books-services.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await getBooks();

    res.statusCode = 200;
    res.json(books);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const getCertainBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await getBookById(bookId);

    if (!book) {
      res.statusCode = 404;
      res.send({ message: `Not found the book with id ${bookId}.` });
    }

    res.statusCode = 200;
    res.json(book);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const createNewBook = async (req, res) => {
  try {
    const requestBody = req.body;

    if (!requestBody.title || !requestBody.author) {
      res.statusCode = 201;
      res.json({ message: "The title or author cannot be empty." });
      return;
    }

    const newBooksList = await addBook(requestBody);

    res.statusCode = 201;
    res.json(newBooksList);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const bookId = Number(req.params.id);

    const newBooksList = await deleteBook(bookId);

    if (!newBooksList) {
      res.statusCode = 404;
      res.json({ message: `Not found the book with id ${bookId}.` });
      return;
    }

    res.statusCode = 200;
    res.json(newBooksList);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};
