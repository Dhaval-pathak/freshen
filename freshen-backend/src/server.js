require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors())
// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/auth', authRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
