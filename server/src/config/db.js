import mongoose from "mongoose";

const dbConnect = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected Succefully ${conn.connection.host}`)
  } catch (error) {
    console.log(`error : ${error.message}`)
  }
}

export default dbConnect;