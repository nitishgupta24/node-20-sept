const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/batch-2-20-2024');
        console.log('Connected to MongoDB');

    } catch (err) {
        console.log(err)
        
    }
    
}

module.exports = connection;