const express = require('express');
const app = express();
const cors = require('cors');


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
