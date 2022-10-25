const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const fileUpload = require('express-fileupload');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(fileUpload());

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
