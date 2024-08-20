const mongoose = require('mongoose');

const pricePerKmSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true 
  },
  additionalInfo: {
    type: String,
    required: false
  }
}, { _id: false }); // Disable _id field for subdocuments

const cabSchema = new mongoose.Schema({
  cabModel: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  onRide: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  pricePerKm: {
    '0-25': pricePerKmSchema,
    '26-50': pricePerKmSchema,
    '51-75': pricePerKmSchema,
    '76-100': pricePerKmSchema,
    '101-150': pricePerKmSchema,
    '151-200': pricePerKmSchema,
    '201-250': pricePerKmSchema,
    '>300': pricePerKmSchema
  }
}, { timestamps: true });

const cabModel = mongoose.model('cab', cabSchema);

module.exports = cabModel;
