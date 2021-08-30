const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const fanzineSchema = new Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('Fanzine', fanzineSchema);