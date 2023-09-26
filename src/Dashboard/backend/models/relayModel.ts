import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: String,
        ip: String,
        counter: String,    
    }
)

const Relay = mongoose.model('Relay', schema) 
export default Relay