const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    availableDates: { type: [Date], required: true },
    pricePerDay: { type: Number, required: true }
});

const Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;
