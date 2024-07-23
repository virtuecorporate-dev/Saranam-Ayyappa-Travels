
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
// exports.createCar = async (req, res) => {
//     try {
//       const { carModel, brand, price, seats, availability, imageUrl, description, category } = req.body;
//       const createCar = await createModel.create({ carModel, brand, price, seats, availability, imageUrl, description, category });
//       res.status(201).json({
//         success: true,
//         createCar
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message
//       });
//     }
//   };
  
exports.createCar= async(req,res)=>{
    try {
     const { carModel, brand, price, seats, availability, imageUrl, description, category} = req.body;
     const createCar = await CarModel.create({ carModel, brand, price, seats, availability, imageUrl, description, category} );
     res.status(201).json({
      success:"true",
      createCar
     })
    } catch(error) {
      res.status(500).json({
        success:"fail",
        error:error.message
      })
    }
  }

// exports.createCar = (req, res) => {
//     createModel.create(req.body)
//       .then(car => {
//         res.status(201).json(car);
//       })
//       .catch(err => {
//         res.status(500).json({ message: err.message });
//       });
//   };
  