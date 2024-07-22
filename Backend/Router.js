const express= require("express")
const router= express.Router()
const { getAllCar, createCar } = require("./Controller/carController")

router.route("/allCars").get(getAllCar)
router.route("/createCar").post(createCar)

module.exports=router