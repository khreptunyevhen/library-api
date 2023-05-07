import { getBooks, getBookById, addBook } from "../services/books-services.js";

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
  const requestBody = req.body;
  const newBooksList = await addBook(requestBody);

  res.statusCode = 200;
  res.json(newBooksList);
};
