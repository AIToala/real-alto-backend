/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var path = require('path');
const helmet = require('helmet');
const routes = require('./routes');
const logger = require('./app/utils/logger');

const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
	origin: 'http://localhost:5173', // Frontend URL
	optionsSuccessStatus: 200,
};

// Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.use((err, req, res, next) => {
	logger.error(err.stack);
	res.status(500).send('Something went wrong!');
});

module.exports = app;
