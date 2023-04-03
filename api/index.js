require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import model schema
const User = require('./models/User');

// Express App
const app = express();

app.use(cors());
app.use(express.json());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

mongoose.connect(
	`mongodb+srv://${username}:${password}@cluster0.nphp4yv.mongodb.net/?retryWrites=true&w=majority`
);

app.post('/register', async (req, res) => {
	const { email, password } = req.body;

	// Save to MongoDB using model created in ./models/User.js
	const userData = await User.create('email', 'password');
	res.json('ok');
});

// Listen for request
app.listen(4000, () => console.log('Listening on port 4000'));
