const express = require('express');
const app = express();
const cors = require('cors');
const jobRoutes = require('./routes/job.routes')
const companyRouter = require('./routes/company.routes')


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/job', jobRoutes);
app.use('/api/company', companyRouter)

module.exports = app;
