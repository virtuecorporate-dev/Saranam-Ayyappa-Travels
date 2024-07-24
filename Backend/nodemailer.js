const nodemailer= require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  exports.sendMail= async(req,res)=>{

    const { bookingDetails } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'website-owner-email@gmail.com',
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });

  }