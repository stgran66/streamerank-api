const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 8000;
const uriDB = process.env.DB_HOST;

const connection = mongoose.connect(uriDB);

connection
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err: Error) => {
    console.log(`Cannot connect to database. Error message: ${err.message}`);
    process.exit(1);
  })
  .then(() => {
    app.listen(PORT, (): void => {
      console.log(`Server running here https://localhost:${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.log(`Server not running. Error message: ${err.message}`);
  });
