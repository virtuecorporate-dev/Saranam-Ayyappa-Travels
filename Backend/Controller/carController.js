
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

exports.updateCar = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedCar = await CarModel.findByIdAndUpdate(
      id,
      {
        carModel: req.body.carModel,
        brand: req.body.brand,
        price: req.body.price,
        seats: req.body.seats,
        availability: req.body.availability,
        category: req.body.category,
        description: req.body.description,
      },
      { new: true } // This option returns the updated document
    );

    if (!updatedCar) {
      return res.status(404).json({ success: false, message: 'Car not found' });
    }

    res.status(200).json({
      success: true,
      car: updatedCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


exports.deleteCar = async(req,res)=>{
  try {
    const id = req.params.id;
  const deleteCar = await CarModel.findByIdAndDelete({_id:id})

  res.status(201).json({
    success:true,
    deleteCar
  })
  } catch (error) {
    console.log(error.message)

  }
  

}