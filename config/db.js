import mongoose from "mongoose";
import colors from "colors";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`DB is connected ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error db connections ${error}`.bgRed.white);
        
    }
}

export default connectDB