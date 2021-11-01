const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userShema = new Schema({
    email: { type: String },
    password: { type: String }
})

module.exports = model('Users', userShema);