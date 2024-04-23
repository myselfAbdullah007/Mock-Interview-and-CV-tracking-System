// db.mjs

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://myselfabdullah007:TW8bYV9NR5mIfHgW@newcluster.l0vs4mq.mongodb.net/?retryWrites=true&w=majority&appName=newCluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the useCreateIndex option
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
