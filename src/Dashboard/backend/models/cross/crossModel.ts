import mongoose from "mongoose";

const bluetoothSchema = new mongoose.Schema(
    {
        DeviceUUID: String,
        ServiceUUID: String,
    }
)

const ScoreSchema = new mongoose.Schema(
    {
        damage: Number,
        task: Number,
        cross: Number,
        relay: Number,
    }
)

const RSSI = new mongoose.Schema(
    {
        signal: Number,
    }
)

const schema = new mongoose.Schema(
    {
        title: String,
        ip: String,
        bluetoothUUID: bluetoothSchema,
        SensitiveBluetoothUUID: [bluetoothSchema],
        active: Boolean,
        score: Number,
        injured: Number,
        buzzerDelay: Number,
        scoreVal: ScoreSchema,
        toCrossRSSI: [RSSI],
        toRelayRSSI: [RSSI],
    }
)

const Cross = mongoose.model('Cross', schema) 