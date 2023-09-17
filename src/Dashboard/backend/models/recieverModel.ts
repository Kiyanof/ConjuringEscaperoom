import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        deviceName: String,
        ip: String,
        BlueUUID: String,
        RSSI: String,
        State: Boolean,      
    }
)

const Reciever = mongoose.model('Reciever', schema) 
export default Reciever