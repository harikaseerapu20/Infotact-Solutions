// server/routes/fest.js
const express = require('express');
const Fest = require('../models/Fest');
const authMiddleware = require('../middleware/authMiddleware'); // Import the middleware
const router = express.Router();

// Create Fest Entry (protected route)
router.post('/', authMiddleware, async (req, res) => {
    const { name, email, phone } = req.body;
    const newFestEntry = new Fest({ name, email, phone });
    await newFestEntry.save();
    res.status(201).json({ message: 'Fest entry created successfully' });
});

// Get all Fest Entries (protected route)
router.get('/', authMiddleware, async (req, res) => {
    const festEntries = await Fest.find();
    res.json(festEntries);
});

// Delete a Fest Entry (protected route)
router.delete('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    await Fest.findByIdAndDelete(id);
    res.json({ message: 'Fest entry deleted successfully' });
});

module.exports = router;