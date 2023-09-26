import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: String,
        UUID: String,
        command: String,    
    }
)

const Tag = mongoose.model('Tag', schema) 
export default Tag