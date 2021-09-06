const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const fanzineSchema = new Schema({
    title: { type: String },
    description: { type: String },
    imageURL: { type: String },
    public_id: { String },
    filename: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('Fanzine', fanzineSchema);