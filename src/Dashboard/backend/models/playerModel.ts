import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phoneNumber: String,
        age: String,
        name: String,
        exprience: String,
        date: String,
        reference: String,
    }
)

const Player = mongoose.model('Player', schema) 
export default Player