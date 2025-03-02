import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true); // ✅ Fixed typo

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    // ✅ Fixed typo in `process.env.MONGOBD_URI` → should be `MONGODB_URI`
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connected = true;
    console.log('✅ MongoDB connected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
};

export default connectDB;
