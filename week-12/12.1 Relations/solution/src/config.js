const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from a .env file if available

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    url: process.env.DATABASE_URL || 'postgres://localhost:5432/defaultdb',
  },
};

// Error handling for missing critical environment variables
if (!process.env.DATABASE_URL) {
  console.warn('Warning: DATABASE_URL is not set, using default local database');
}

module.exports = config;
