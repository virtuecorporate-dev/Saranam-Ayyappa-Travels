const mongoose = require("mongoose")

const mongodbConnection=()=> {

    mongoose.connect(process.env.MONGO_URL)

    const connection = mongoose.connection

    connection.on("error", () => {
        console.log("Mongoose not connection");
    })

    connection.on("connected", () => {
        console.log("Mongoose connected to Server");
    })
}

module.exports = mongodbConnection