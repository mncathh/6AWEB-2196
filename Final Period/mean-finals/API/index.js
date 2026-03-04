const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbName = "MyDb";

async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB");
}
connectDB();

const db = () => client.db(dbName).collection("Books");

// GET all books
app.get('/books', async (req, res) => {
  const books = await db().find({}).toArray();
  res.json(books);
});

// GET one book
app.get('/books/:id', async (req, res) => {
  const book = await db().findOne({ _id: new ObjectId(req.params.id) });
  res.json(book);
});

// POST - create book
app.post('/books', async (req, res) => {
  const result = await db().insertOne(req.body);
  res.json(result);
});

// PUT - update book
app.put('/books/:id', async (req, res) => {
  const result = await db().updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

// DELETE - delete book
app.delete('/books/:id', async (req, res) => {
  const result = await db().deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));