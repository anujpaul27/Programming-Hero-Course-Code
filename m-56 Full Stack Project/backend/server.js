const app = require('./src/app');
const PORT = process.env.PORT || 5000;
const ConnectDB = require('./src/config/db');

// Connect to the database
ConnectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 