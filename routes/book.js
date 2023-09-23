const express = require("express");
const router = express.Router();
const Book = require("../models/books");

router.post("/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.json({ message: "error creating book" });
  }
});

router.get("/book", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.json({ message: "error finding books" });
  }
});

module.exports = router;
