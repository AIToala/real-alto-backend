const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloud');

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'real-alto',
		format: async (req, file) => {
			const fileFormat = file.originalname.split('.').pop();
			return fileFormat;
		},
		public_id: (req, file) => file.originalname,
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
