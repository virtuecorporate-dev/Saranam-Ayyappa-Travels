
const CarModel = require('../Model/carModel');
const cabModel = require('../Model/AllcabsModel')
const bycrpt = require('bcryptjs')
const userModel = require('../Model/UserModel')
exports.getAllCar = async (req, res) => {
  try { 
    const Cabs = await cabModel.find({})
    res.json({
      success: true,
      Cabs
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.getCarsByCategory = async (req, res) => {
  try {
    const category = req.query.category
    const Cars = await CarModel.find({ category })
    res.json({
      success: true,
      Cars
    })
  } catch (error) {
    console.log(error.message)
  }
}


// exports.createCar = async (req, res) => {
//   try {
//       const { carModel, brand, price, seats, availability, description, category } = req.body;
//       const imageUrl = req.file ? `/images/${req.file.filename}` : '';

//       if (!imageUrl) {
//           throw new Error('Image upload failed. Please try again.');
//       }

//       const newCar = new CarModel({
//           carModel,
//           brand,
//           price,
//           seats,
//           availability,
//           imageUrl,
//           category,
//           description,
//       });

//       await newCar.save();

//       res.status(201).json({
//           success: true,
//           newCar
//       });
//   } catch (error) {
//       res.status(500).json({
//           success: false,
//           error: error.message
//       });
//   }
// };

exports.updateCar = async (req, res) => {
  try {
    const id = req.params.id;

    // Directly use the body data without any file upload handling
    const updatedCar = await cabModel.findByIdAndUpdate(
      id,
      {
        cabModel: req.body.cabModel,
        brand: req.body.brand,
        price: req.body.price,
        seats: req.body.seats,
        onRide: req.body.onRide, // Ensure you use the correct field name
        description: req.body.description,
        category: req.body.category,
        pricePerKm: req.body.pricePerKm, // Include pricePerKm data
        localTripType: req.body.localTripType, // Include localTripType data
        pricePerday: req.body.pricePerday // Include pricePerday data
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
  const deleteCar = await cabModel.findByIdAndDelete({_id:id})

  res.status(201).json({
    success:true,
    deleteCar
  })
  } catch (error) {
    console.log(error.message)

  }
  

}

///register in 
exports.Register = async (req, res) => {
  try {
    // Assuming some registration logic here
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const newUser = new userModel({
      name, email, password, confirmPassword
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      newUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};



exports.Login = async(req,res)=>{
  try {
    const {email,password}=req.body;
    
    const user = await userModel.findOne({email})
    if(!user){
      res.status(400).json({error:"userName is invalid"})
    }
    if(user.password != password){
      res.status(401).json({error:"password does not match"})
    }
    res.status(201).json({
      success:"true",
      messagee:"login succesFull"
    })
  } catch (error) {
    res.status(500).json({
      succes:"fail",
      error:error.message
    })
  }
}
