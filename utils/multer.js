const multer = require("multer");
const { memoryStorage } = require("multer");
const AppError = require("./AppError");

const upload = multer({
    storage: memoryStorage(),
    fileFilter: (req, file, callback) => {
        // console.log("------------->", file)
        callback(null, true);
    },
});

module.exports = upload;
