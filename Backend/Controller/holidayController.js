const multer = require('multer');
const holidayModel = require('../Model/holidayModel');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, 'public', 'images');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
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

exports.getHoliday = async (req, res) => {
    try {
        const holidays = await holidayModel.find({});
        res.status(200).json({
            success: true,
            holidays
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.createHoliday = [
    upload.single('imageUrl'),
    async (req, res) => {
        try {
            const { name, category, services } = req.body;
            const imageUrl = req.file ? `/images/${req.file.filename}` : "";

            if (!name || !category || !imageUrl) {
                return res.status(400).json({
                    success: false,
                    message: 'Required fields are missing or image not uploaded'
                });
            }

            const newHoliday = new holidayModel({
                name,
                category: Array.isArray(category) ? category : [category],
                services: Array.isArray(services) ? services : [services],
                imageUrl
            });

            await newHoliday.save();

            res.status(201).json({
                success: true,
                holiday: newHoliday
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
];

