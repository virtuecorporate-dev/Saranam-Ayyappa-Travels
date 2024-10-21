const express= require("express")
const router= express.Router()
const { getAllCar , updateCar, deleteCar,getCarsByCategory, Register, Login} = require("./Controller/carController");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// const CarModel = require("./Model/carModel");
const cabModel = require('./Model/AllcabsModel')
const { sendMail } = require('./nodemailer');
// const { getHoliday, createHoliday } = require("./Controller/holidayController");
// const { getAllTour, createTour, updateTour } = require("./Controller/tourController");
const {getfilteredCabs}= require("./Controller/AllCabsController")
const { getHoliday, createHoliday, updateHoliday, deleteHoliday } = require("./Controller/holidayController");
const { getAllTour, createTour, updateTour, deleteTour } = require("./Controller/tourController");


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const dir = path.join(__dirname, 'public', 'images');
            console.log(dir);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            cb(null, dir);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});

router.route("/allFilteredCabs").get(getfilteredCabs)
router.route("/allCars").get(getAllCar)
router.route("/avaibleCars").get(getCarsByCategory)
router.post("/createCar", upload.single('imageUrl'), async (req, res) => {
    try {
        const { cabModel: carModel, brand, seats, onRide, description, category } = req.body;
        // Image upload logic
        const imageUrl = req.file ? `/images/${req.file.filename}` : '';

        if (!imageUrl) {
            throw new Error('Image upload failed. Please try again.');
        }

        // Parse JSON fields safely
        let pricePerKm, localTripType, pricePerday;

        try {
            pricePerKm = req.body.pricePerKm ? JSON.parse(req.body.pricePerKm) : {};
            localTripType = req.body.localTripType ? JSON.parse(req.body.localTripType) : {};
            pricePerday = req.body.pricePerday ? JSON.parse(req.body.pricePerday) : {};
        } catch (parseError) {
            throw new Error('Invalid JSON format for pricePerKm, localTripType, or pricePerday.');
        }

        // Create new cab instance
        const newCab = new cabModel({
            cabModel: cabModel,
            brand,
            seats,
            onRide,
            description,
            category,
            imageUrl, // Saving the uploaded image URL
            pricePerKm, // Parsed JSON
            localTripType, // Parsed JSON
            pricePerday // Parsed JSON
        });

        // Save the new cab in the database
        await newCab.save();

        // Responding with success
        res.status(201).json({
            success: true,
            newCab
        });
    } catch (error) {
        // Handling errors
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// router.route("/createCar").post(createCar);
router.route("/update/:id").put(updateCar);
router.route("/delete/:id").delete(deleteCar)
router.route('/sendemail').post(sendMail);
router.route('/register').post(Register);
router.route('/login').post(Login)


///route foor getHolidayPackages
router.route('/holiday').get(getHoliday);
router.route('/createHoliday').post(createHoliday)
router.route('/updateHoliday/:id').put(updateHoliday);
router.route('/deleteHoliday/:id').delete(deleteHoliday);
///route foor getTourPackage'
router.route('/tour').get(getAllTour);
router.route('/createTour').post(createTour);
router.route('/updateTour/:id').put(updateTour);
router.route('/deleteTour/:id').delete(deleteTour);

module.exports=router