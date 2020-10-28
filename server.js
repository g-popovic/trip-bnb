require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB Atlas

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', () => console.log('Connected to MongoDB Atlas'));

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(5000, (req, res) => {
	console.log('Server listening on port 5000');
});
