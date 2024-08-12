const nodemailer = require("nodemailer");
const dotenv= require("dotenv");
const path= require("path");
dotenv.config({path:path.join(__dirname,"config","config.env")})
require('dotenv').config(); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
    
  }
});

exports.sendMail = async (req, res) => {
  const { bookingDetails } = req.body;

  // Validate bookingDetails
  if (!bookingDetails || !bookingDetails.name || !bookingDetails.mobile || !bookingDetails.mail) {
    return res.status(400).json({ message: 'Missing booking details' });
  }

  const mailOptions = {
    from:bookingDetails.mail, // Use environment variable for sender email
    to: 'sathiyakalavirtue@gmail.com', // Replace with your desired recipient
    subject: 'New Cab Booking',
    text: `
      Trip Type: ${bookingDetails.triptype}
      From: ${bookingDetails.from}
      To: ${bookingDetails.to}
      Date: ${bookingDetails.date}
      Pick Up Time: ${bookingDetails.pickUpTime}
      Pick Up Location: ${bookingDetails.pickUpLocation}
      Drop Time: ${bookingDetails.dropTime}
      Drop Location: ${bookingDetails.dropLocation}
      Visiting Places: ${bookingDetails.visitingPlaces.join(', ')}
      Name: ${bookingDetails.name}
      Mobile: ${bookingDetails.mobile}
      Mail: ${bookingDetails.mail}
      Selected Cab: ${bookingDetails.selectedCab.brand} ${bookingDetails.selectedCab.carModel}
      Price: ₹${bookingDetails.selectedCab.price}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent: ' + info.response });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email: ' + error.toString() });
  }
};
