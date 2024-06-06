const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adposts = require('./routes/adposts');


const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);
app.use('/adpost', adposts);


// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});