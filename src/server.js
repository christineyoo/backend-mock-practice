const app = require('./app');
const knex = require('knex');
const { PORT, DATABASE_URL } = require('./config');

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
