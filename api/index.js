const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Express App
const app = express();

app.use(cors());
app.use(express.json());

const username = process.env.MONGOOSE_USERNAME;
const password = process.env.MONGOOSE_PASSWORD;

mongoose.connect(
	`mongodb+srv://${username}:${password}@cluster0.nphp4yv.mongodb.net/?retryWrites=true&w=majority`
);

app.post('/register', (req, res) => {
	const { email, password } = req.body;
	res.json({ requestData: { email, password } });
});

// Listen for request
app.listen(4000, () => console.log('Listening on port 4000'));
