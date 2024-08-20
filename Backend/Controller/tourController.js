const tourModel = require('../Model/tourModel');
const path=require('path');
const multer = require('multer');
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
// /api/vi/tour
exports.getAllTour= async(req,res)=>{
    try{
        const tour = await tourModel.find({});
        res.json({
            success:true,
            tour
            
        })
    }
    catch(error){
        console.log("error tour",error.message)
        res.json({
            success:false,
            message:error.message
        })

    }
}

// /api/vi/createTour

exports.createTour = [
    upload.single('imageUrl'), 
    async (req, res) => {
        try {
            const { name, numberOfPersons, services, category } = req.body;
            const imageUrl = req.file ? `/images/${req.file.filename}` : "";

            if (!imageUrl) {
                return res.status(400).json({
                    success: false,
                    message: 'Image not uploaded'
                });
            }


            const newTour = new tourModel({
                name,
                numberOfPersons,
                imageUrl,
                services: Array.isArray(services) ? services : [services],
                category: Array.isArray(category) ? category : [category]
            });

            await newTour.save();

            res.status(200).json({
                success: true,
                tour: newTour // Return the saved document
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
];

// http://localhost:8000/api/v1/updateTour/id


exports.updateTour=async(req,res)=>{
    try {
        const id = req.params.id;
        const updateTour = await tourModel.findByIdAndUpdate(id,{
                name:req.body.name,
                numberOfPersons:req.body.numberOfPersons,
                imageUrl:req.body.imageUrl,
                services:req.body.services,
                category:req.body.category
        },
        {new:true}
        
       );

       if(!updateTour){
        res.status(400).json({success:"false",message:"tour not found"})
       }
       res.status(200).json({
        success:true,
        tour:updateTour
    })
    
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// http://localhost:8000/api/v1/deleteTour/id

exports.deleteTour=async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteTour = await tourModel.findByIdAndDelete({_id:id})
        res.status(201).json({
            success:true,
            deleteTour
        })
    }
  catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
  }

}