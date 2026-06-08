const mongoose = require('mongoose');
const config = require('../config/config');

const ConnectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI);
        console.log('Database Connected');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

module.exports = ConnectDB;