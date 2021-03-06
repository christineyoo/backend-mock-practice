module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://chris@localhost/collab',
    CLIENT_ORIGIN: {
      origin: 'http://localhost:3000',
      methods: 'GET'
    }
  }