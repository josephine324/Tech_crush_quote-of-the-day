// app.js

const express = require('express');
const path = require('path');
const quoteRoutes = require('./routes/quoteRoutes');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(logger); // Log each request
app.use(express.static(path.join(__dirname, 'public'))); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', quoteRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
