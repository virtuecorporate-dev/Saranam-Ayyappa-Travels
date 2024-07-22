const BusesModel= require("../Model/Buses Model")

exports.getAllBuses= async(req,res,next)=>{
    try {
            const Buses= await BusesModel.find({})
            console.log(Buses)
            res.json({
                success:true,
                Buses
            })
        
    } catch (error) {
        console.log(error);
    }
}
