// routes/seller.js
const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET all listings
router.get('/listings', async (req, res) => {
    console.log("Fetching all listings");
  const listings = await Listing.find();
  res.json(listings);
});

// POST a new listing
router.post('/listings', async (req, res) => {
    console.log("Received new listing:", req.body);
  const listing = new Listing(req.body);
  await listing.save();
  res.status(201).json({ message: "Listing created" });
});

module.exports = router;
