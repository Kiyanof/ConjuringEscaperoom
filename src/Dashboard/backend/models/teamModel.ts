import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: String,
        exprience: Number,
        date: String,
        reference: String,
    }
)

const Team = mongoose.model('Team', schema) 
export default Team