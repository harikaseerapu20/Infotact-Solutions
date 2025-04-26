// server/models/Fest.js
const mongoose = require('mongoose');

const FestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('Fest', FestSchema);