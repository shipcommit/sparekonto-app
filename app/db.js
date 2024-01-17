import mongoose from 'mongoose';

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
}
