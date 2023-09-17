import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phoneNumber: String,
        age: Number,
        teamID: String,
    }
)

const Player = mongoose.model('Player', schema) 
export default Player