const mongoose = require('mongoose');
require('dotenv').config();

console.log('Testing MongoDB connection...');
console.log('URI:', process.env.MONGO_URI);

// Add retry logic
const connectDB = async () => {
  for (let i = 0; i < 3; i++) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 8000,
        socketTimeoutMS: 8000,
      });
      console.log('✅ MongoDB Connected Successfully!');
      process.exit(0);
    } catch (err) {
      console.log(`Attempt ${i+1}/3 failed:`, err.message);
      if (i === 2) {
        console.log('❌ MongoDB Connection Failed!');
        console.log('Full Error:', err);
        process.exit(1);
      }
      await new Promise(r => setTimeout(r, 2000));
    }
  }
};

connectDB();
