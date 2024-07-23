
const CarModel = require('../Model/carModel')

exports.getAllCar = async (req, res) => {
    try {
      const category =req.query.category
        const Cars = await CarModel.find({category})
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

exports.updateCar = async(req,res)=>{
  try {
    const id = req.params.id
  
    const update = await CarModel.findByIdAndUpdate({_id:id},{
      carModel:req.body.carModel,
      brand:req.body.brand,
      price:req.body.price,
      seats:req.body.seats,
      availability:req.body.availability,
      // imageUrl,
      category:req.body.category,
      description:req.body.description
    })
    res.status(201).json({
      success:true,
      update
    })
  } catch (error) {
      error:error.message
  }

}