
const express = require('express');
const path = require('path');
require('dotenv').config()

const movieRoutes = require('./app/routes/movieRoutes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'app/public')));

app.use(express.urlencoded({ extended: true }));

app.use('/', movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
