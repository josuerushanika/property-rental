import mongoose from 'mongoose'

let connected = false;

const connectDB = async () => {
    mongoose.set('strickQuery', true);
    // If the database is already connected, don't connect again 
  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }
  // connect to MongoDB
  try {
    await  mongoose.connect(process.env.MONGOBD_URI);
    connected = true;
    console.log('MongoDB connected....');
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;