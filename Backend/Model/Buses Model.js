const mongoose = require("mongoose")

const BusesSchema = new mongoose.Schema({
    BusName: {
        type: String,
        required: true,
        unique: true
    },
    BusNo: {
        type: String,
        required: true,
        unique: true
    },
    Origin: {
        type: String,
        required: true,
    },
    Destination: {
        type: String,
        required: true,
    },
    Route: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
    DepatureTime: {
        type: Date,
        required: true,
    },
    ArrivalTime: {
        type: Date,
        required: true,
    },
    BusType: {
        type: String,
        required: true,
    },
    Amenities: [
        {
            type: String,
        }
    ],
    DriverName: {
        type: String,
        required: true,
    },
    DriverPhoneNo: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    SeatPrices: {
        LowerBirth: {
            type: Number,
            required: true
        },
        UpperBirth: {
            type: Number,
            required: true
        },
        SemiSleeper: {
            type: Number,
            required: true
        }
    }

})

const BusesModel= mongoose.model("Buses", BusesSchema)
module.exports= BusesModel