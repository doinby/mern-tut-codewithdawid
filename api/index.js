const express = require('express');
const cors = require('cors');

// Express app
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
	const { email, password } = req.body;
	res.json({ requestData: { email, password } });
});

// Listen for request
app.listen(4000, () => console.log('Listening on port 4000'));
