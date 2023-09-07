import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema(
    {
        damage: Number,
        task: Number,
        cross: Number,
        relay: Number,
    }
)

const schema = new mongoose.Schema(
    {
        title: String,
        ip: String,
        bluetoothUUID: String,
        SensitiveCross: [Boolean],
        SensitiveRelay: [Boolean],
        active: Boolean,
        score: Number,
        injured: Number,
        buzzerDelay: Number,
        scoreVal: ScoreSchema,
        toCrossRSSI: [Number],
        toRelayRSSI: [Number],
    }
)

const Cross = mongoose.model('Cross', schema) 
export default Cross