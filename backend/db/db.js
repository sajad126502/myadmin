const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = "mongodb+srv://sajadnaikoo35:FiXJT5nKrmU9g3pe@cluster0.rx5zuat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
