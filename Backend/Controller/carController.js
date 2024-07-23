
const CarModel = require('../Model/carModel')

exports.getAllCar = async (req, res) => {
    try {
        const Cars = await CarModel.find({})
        res.json({
            success: true,
            Cars
        })
    } catch (error) {
        console.log(error.message)
    }
}


exports.createCar = async (req, res) => {
  try {
    const { carModel, brand, price, seats, availability, description, category } = req.body;
    const imageUrl = req.file ? req.file.path : ''; // Multer will handle the file upload

    const newCar = new CarModel({
      carModel,
      brand,
      price,
      seats,
      availability,
      // imageUrl,
      category,
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
};


