// server.js
const express = require('express');
const mongoose = require('mongoose');
const sellerRoutes = require('./routes/seller');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ankitshaw6933:ankitshaw6933@cluster0.plj2vyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use('/api/seller', sellerRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
