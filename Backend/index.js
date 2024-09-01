import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./Routers/book.router.js"
import cors from "cors"
import Book from "./Models/books.model.js"
import userRoute from "./Routers/user.route.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4000
const MongoDBURI = process.env.MongoDBURI

// connect mongodb

try {

    mongoose.connect(MongoDBURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB connected successfully.")

    
} catch (error) {
    console.log("MongoDB connection error: " , error)
}

// Route to get a book by ID
app.get('/book/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error('Failed to fetch book', error);
    res.status(500).json({ error: 'Failed to fetch book from the database' });
  }
});


// Route to handle book submission
app.post('/book', async (req, res) => {
  const { title, category, price, disc, img } = req.body;

  if (!title || !category || !price || !disc || !img) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newBook = new Book({ title, category, price, disc, img });
    const result = await newBook.save();

    res.status(201).json({ message: 'Book added successfully', bookId: result._id });
  } catch (error) {
    console.error('Failed to add book', error);
    res.status(500).json({ error: 'Failed to add book to the database' });
  }
});

// Route to delete a book by ID
app.delete('/book/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    const result = await Book.findByIdAndDelete(bookId);

    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Failed to delete book', error);
    res.status(500).json({ error: 'Failed to delete book from the database' });
  }
});

// Route to update a book by ID
app.patch('/book/:id', async (req, res) => {
  const bookId = req.params.id;
  const updates = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, updates, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book updated successfully', updatedBook });
  } catch (error) {
    console.error('Failed to update book', error);
    res.status(500).json({ error: 'Failed to update book in the database' });
  }
});



// Defining routes

 app.use("/book",bookRoute)  
 app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})