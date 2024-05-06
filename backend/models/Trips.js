const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    photos: { type: [String], required: true },
    destination: { type: String, required: true },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    price: { type: Number, required: true },
    ratings: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Trip', tripSchema);
