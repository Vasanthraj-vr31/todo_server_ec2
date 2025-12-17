import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDb = () => {
     try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("db has been Connected");
     }catch(err){
        console.error(err);
     }
}
export default connectDb;