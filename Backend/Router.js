const express= require("express")
const router= express.Router()
const {getAllBuses}= require('./Controller/AllBusesController')

router.route("/allbuses").get(getAllBuses)

module.exports=router