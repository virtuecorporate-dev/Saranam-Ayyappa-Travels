const express= require("express")
const router= express.Router()
const { getAllCar, createCar , updateCar, deleteCar} = require("./Controller/carController");
const multer = require('multer');
const path = require('path');

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })
router.route("/allCars").get(getAllCar)
// router.route("/createCar").post(upload.single('imageUrl'), createCar);
router.route("/createCar").post(createCar);
router.route("/update/:id").put(updateCar);
router.route("/delete/:id").delete(deleteCar)

module.exports=router