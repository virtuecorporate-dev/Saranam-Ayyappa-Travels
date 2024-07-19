const express = require("express")
const app= express()
const dotenv= require("dotenv")
const path= require("path")
const mongodbConnection = require("./config/connectDatabase")


dotenv.config({path:path.join(__dirname,"config","config.env")})


mongodbConnection()

app.listen(process.env.PORT,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})