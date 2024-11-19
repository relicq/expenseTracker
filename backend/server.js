import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
require('dotenv').config();

const app = express();
app.use(cors());
app.use(json());

connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Welcome to the Personal Finance Tracker API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
