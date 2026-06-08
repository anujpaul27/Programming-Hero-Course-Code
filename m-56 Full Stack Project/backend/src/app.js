const express = require('express');
const app = express();
const cors = require('cors');
const jobRoutes = require('./routes/job.routes')


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Server is ruuning');
});

app.use('/api/job', jobRoutes);

module.exports = app;
