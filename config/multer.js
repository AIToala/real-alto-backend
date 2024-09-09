const multer = require('multer');
const { cloudinary, handleUpload } = require('./cloud');
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = {
	upload,
	cloudinary,
	handleUpload,
};
