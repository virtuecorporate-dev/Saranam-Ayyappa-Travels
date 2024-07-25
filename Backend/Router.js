const express= require("express")
const router= express.Router()
const { getAllCar , updateCar, deleteCar,getCarsByCategory} = require("./Controller/carController");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const CarModel = require("./Model/carModel");


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const dir = path.join(__dirname, 'public', 'images');
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




router.route("/allCars").get(getAllCar)
router.route("/avaibleCars").get(getCarsByCategory)
router.post("/createCar", upload.single('imageUrl'), async (req, res) => {
    try {
        const { carModel, brand, price, seats, availability, description, category } = req.body;
        const imageUrl = req.file ? `/images/${req.file.filename}` : '';

        if (!imageUrl) {
            throw new Error('Image upload failed. Please try again.');
        }

        const newCar = new CarModel({
            carModel,
            brand,
            price,
            seats,
            availability,
            imageUrl,
            category: Array.isArray(category) ? category : [category],
            description,
        });

        await newCar.save();

        res.status(201).json({
            success: true,
            newCar
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
// router.route("/createCar").post(createCar);
router.route("/update/:id").put(updateCar);
router.route("/delete/:id").delete(deleteCar)

module.exports=router