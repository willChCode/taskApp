import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS);
    console.log('mongo DataBase connected successfully');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
