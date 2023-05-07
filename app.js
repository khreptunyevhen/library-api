import "colors";
import express from "express";
import dotenv from "dotenv";
import books from "./books/book.routes.js";
import users from "./users/user.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Books
app.use("/api/books", books);
app.use("/api/books/:id", books);
app.post("/api/books", books);
app.put("/api/books/:id", books);
app.delete("/api/books/:id", books);

// Users
app.use("/api/users", users);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  err
    ? console.error(err)
    : console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${process.env.DOMAIN}:${PORT}...`
          .bold.blue
      );
});
