import express from "express";
import { AppDataSource } from "./ormConfig";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  updateBookById,
} from "./services/bookServices";
import bodyParser from "body-parser";

const app = express();

const port = 3001;

AppDataSource.initialize()
  .then(async (res) => {
    console.log("SUCCESSFULLY INITIALIZED DB");
    console.log({ res });
  })
  .catch((err) => {
    console.log("ERROR INITIALIZING DB");
    console.log(err);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// GET ALL BOOKS
app.get("/books", getAllBooks);

// INSERT ONE BOOK
app.post("/book", createBook);

// UPDATE ONE BOOK
app.put("/book/:id", updateBookById);

// DELETE BOOK
app.delete("/book/:id", deleteBookById);

app.listen(port, (): void => {
  console.log("server running");
});
