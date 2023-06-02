import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
        });
        console.log(`connectred to Mongo:${conn.connection.host}`)
    } catch (error) {
        console.log("Error from config->db.js is:",error);
        process.exit();
    }
}; 

export default  connectDB;