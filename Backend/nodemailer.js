// const nodemailer = require("nodemailer");
// const dotenv= require("dotenv");
// const path= require("path");
// dotenv.config({path:path.join(__dirname,"config","config.env")})
// require('dotenv').config(); 

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS 
    
//   }
// });

// exports.sendMail = async (req, res) => {
//   const { bookingDetails } = req.body;

//   // Validate bookingDetails
//   if (!bookingDetails || !bookingDetails.name || !bookingDetails.mobile || !bookingDetails.mail) {
//     return res.status(400).json({ message: 'Missing booking details' });
//   }

//   const mailOptions = {
//     from:bookingDetails.mail, // Use environment variable for sender email
//     to: 'sathiyakalavirtue@gmail.com', // Replace with your desired recipient
//     subject: 'New Cab Booking',
//     text: `
//       Trip Type: ${bookingDetails.triptype}
//       From: ${bookingDetails.from}
//       To: ${bookingDetails.to}
//       Date: ${bookingDetails.PickUpdate}
//       Pick Up Time: ${bookingDetails.pickUpTime}
//       Pick Up Location: ${bookingDetails.pickUpLocation}
//       ${bookingDetails.dropTime && `Drop Time: ${bookingDetails.dropTime}` }  
//       ${bookingDetails.dropLocation && `Drop Location: ${bookingDetails.dropLocation}`}
//       ${bookingDetails.visitingPlaces && `Visiting Places: ${bookingDetails.visitingPlaces.join(', ')}`} 
//       Name: ${bookingDetails.name}
//       Mobile: ${bookingDetails.mobile}
//       Mail: ${bookingDetails.mail}
//       Selected Cab: ${bookingDetails.selectedCab.brand} ${bookingDetails.selectedCab.carModel}
//       Price: ₹${bookingDetails.fare}
//     `
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent: ' + info.response });
//   } catch (error) {
//     res.status(500).json({ message: 'Error sending email: ' + error.toString() });
//   }
// };


const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Sender's email
    pass: process.env.EMAIL_PASS,  // Sender's email password
  },
});

exports.sendMail = async (req, res) => {
  const { bookingDetails } = req.body;

  // Validate bookingDetails
  if (!bookingDetails || !bookingDetails.name || !bookingDetails.mobile || !bookingDetails.mail) {
    return res.status(400).json({ message: 'Missing booking details' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use the environment variable for sender email
    to: 'sathiyakalavirtue@gmail.com', // Replace with your desired recipient
    subject: 'New Cab Booking Confirmation',
    text: `
      New Cab Booking Details:

      Trip Type: ${bookingDetails.triptype}
      From: ${bookingDetails.from}
      To: ${bookingDetails.to}
      Date: ${bookingDetails.PickUpdate}
      Pick Up Time: ${bookingDetails.pickUpTime}
      Pick Up Location: ${bookingDetails.pickUpLocation}
      ${bookingDetails.ReturnTime ? `Drop Time: ${bookingDetails.ReturnTime}` : ''}
      ${bookingDetails.returnLocation ? `Drop Location: ${bookingDetails.returnLocation}` : ''}
      ${bookingDetails.visitingPlaces ? `Visiting Places: ${bookingDetails.visitingPlaces.join(', ')}` : ''}
      
      Customer Details:
      Name: ${bookingDetails.name}
      Mobile: ${bookingDetails.mobile}
      Email: ${bookingDetails.mail}

      Selected Cab: ${bookingDetails.selectedCab ? `${bookingDetails.selectedCab.brand ? bookingDetails.selectedCab.brand : ``} ${bookingDetails.selectedCab.carModel ? bookingDetails.selectedCab.carModel : ``}` : 'N/A'}
      Price: ₹${bookingDetails.fare}

    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent: ' + info.response });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error sending email: ' + error.toString() });
  }
};

