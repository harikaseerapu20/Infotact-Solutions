// server/routes/fest.js
const express = require('express');
const Fest = require('../models/Fest');
const router = express.Router();

// Create Fest Entry
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;
    const newFestEntry = new Fest({ name, email, phone });
    await newFestEntry.save();
    res.status(201).send;
});
