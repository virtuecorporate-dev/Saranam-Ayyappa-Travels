const express = require("express")
const app= express()
const dotenv= require("dotenv")
const path= require("path")
const mongodbConnection = require("./config/connectDatabase");
const cors= require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())

dotenv.config({path:path.join(__dirname,"config","config.env")})
mongodbConnection()

const router=require('./Router')

app.use('/api/v1', router)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})