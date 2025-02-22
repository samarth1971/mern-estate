import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

// Now check if the environment variable is loaded
if (!process.env.MONGO) {
    console.error('MONGO environment variable is not defined');
    process.exit(1);
}

const app = express();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        // Log the full error object for debugging
        console.error('Full error:', err);
    });

app.listen(3000,() => {
    console.log('Server is runnig on port 3000!!!');
}
);