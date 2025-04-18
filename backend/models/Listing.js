// models/Listing.js
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  item: { type: String, required: true },

  // Price info
  price: { type: String, required: true },         // e.g., ₹50/kg
  priceValue: { type: Number, required: true },    // e.g., 50

  // Quantity info
  quantity: { type: String, required: true },       // e.g., 10 kg or 2 dozen
  quantityValue: { type: Number, required: true },  // e.g., 10 or 2

  total: { type: Number, required: true },          // e.g., 500

  date: { type: String, required: true },           // e.g., 18/04/2025
  emoji: { type: String, required: true },

  // Optional: user linking
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Listing', listingSchema);
