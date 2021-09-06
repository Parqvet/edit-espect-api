const cloudinary = require('cloudinary');
const config = require('../../config');

cloudinary.config({
    cloud_name: config.cloudinaryName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinarySecretKey
});

module.exports = cloudinary;