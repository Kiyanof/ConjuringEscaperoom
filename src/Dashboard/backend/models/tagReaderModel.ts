import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        ip: String,   
    }
)

const Reader = mongoose.model('Reader', schema) 
export default Reader