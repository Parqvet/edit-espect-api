const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');

module.exports = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});