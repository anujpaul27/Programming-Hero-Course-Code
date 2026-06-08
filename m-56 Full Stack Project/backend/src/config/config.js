require('dotenv').config();


if (!process.env.MONGODB_URI)
{
    throw new Error('MONGODB_URI is not defined in environment variables');
}


const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 5000,
};

module.exports = config;    