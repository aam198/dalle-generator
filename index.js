const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();

// Enabe body parser, to accept body data
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to openaiRoutes Route
app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on ${port}`)); 

