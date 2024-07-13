const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const logger = require('./app/utils/logger');

dotenv.config();
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

const corsOptions = {
	origin: 'http://localhost:5173', // Frontend URL
	optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//Api Routes
app.get('/', (req, res) => {
	res.json({
		message: 'Bienvenido a Real Alto - Proximamente documentacion API.',
	});
});
app.get('/api/status', (req, res) => {
	logger.info('Checking API status: Everything is OK');
	res.status(200).send({
		status: 'UP',
		message: 'The API is up and running.',
	});
});

const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
module.exports = app;
