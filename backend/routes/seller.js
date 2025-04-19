// routes/seller.js
const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET all listings
router.get('/listings', async (req, res) => {
  try {
    console.log("Fetching all listings");
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching listings" });
  }
});

// POST a new listing
router.post('/listings', async (req, res) => {
  try {
    console.log("Received new listing:", req.body);
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json({ message: "Listing created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while creating listing" });
  }
});

// DELETE a listing by ID
router.delete('/listings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.json({ message: "Listing deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while deleting listing" });
  }
});

module.exports = router;
