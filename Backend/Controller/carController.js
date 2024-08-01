
const CarModel = require('../Model/carModel');
const bycrpt = require('bcryptjs')
const userModel = require('../Model/UserModel')
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

    const updatedCar = await CarModel.findByIdAndUpdate(
      id,
      {
        carModel: req.body.carModel,
        brand: req.body.brand,
        price: req.body.price,
        seats: req.body.seats,
        availability: req.body.availability,
        imageUrl:req.body.imageUrl,
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
