// const cabModel = require("../Model/AllcabsModel")

// exports.getfilteredCabs = async (req, res) => {
//     try {
//         const { category, seats, distance } = req.query
//         const distanceInKm = parseInt(distance, 10)

//         const fiteredCab = await cabModel.find({
//             category,
//             seats: parseInt(seats, 10),

//             $or: [
//                 { "pricePerKm.0-25": { $exists: distanceInKm >= 0 && distanceInKm <= 25 } },
//                 { "pricePerKm.26-50": { $exists: distanceInKm > 25 && distanceInKm <= 50 } },
//                 { "pricePerKm.51-75": { $exists: distanceInKm > 50 && distanceInKm <= 75 } },
//                 { "pricePerKm.76-100": { $exists: distanceInKm > 75 && distanceInKm <= 100 } },
//                 { "pricePerKm.101-150": { $exists: distanceInKm > 100 && distanceInKm <= 150 } },
//                 { "pricePerKm.151-200": { $exists: distanceInKm > 150 && distanceInKm <= 200 } },
//                 { "pricePerKm.201-250": { $exists: distanceInKm > 200 && distanceInKm <= 250 } },
//                 { "pricePerKm.>300": { $exists: distanceInKm > 300 } }
//             ]

//         })

//         res.json({
//             success: true,
//             fiteredCab
//         })
//     } catch (error) {
//         console.log(error.message);
//     }

// }

// const cabModel = require("../Model/AllcabsModel");

// exports.getfilteredCabs = async (req, res) => {
//     try {
//         const { category, seats, distance } = req.query;
//         const distanceInKm = parseInt(distance, 10);

//         // Determine the pricePerKm key to search based on the distance
//         let priceKey;
//         if (distanceInKm >= 0 && distanceInKm <= 25) {
//             priceKey = "pricePerKm.0-25";
//         } else if (distanceInKm > 25 && distanceInKm <= 50) {
//             priceKey = "pricePerKm.26-50";
//         } else if (distanceInKm > 50 && distanceInKm <= 75) {
//             priceKey = "pricePerKm.51-75";
//         } else if (distanceInKm > 75 && distanceInKm <= 100) {
//             priceKey = "pricePerKm.76-100";
//         } else if (distanceInKm > 100 && distanceInKm <= 150) {
//             priceKey = "pricePerKm.101-150";
//         } else if (distanceInKm > 150 && distanceInKm <= 200) {
//             priceKey = "pricePerKm.151-200";
//         } else if (distanceInKm > 200 && distanceInKm <= 250) {
//             priceKey = "pricePerKm.201-250";
//         } else if (distanceInKm > 300) {
//             priceKey = "pricePerKm.>300";
//         } else {
//             priceKey = null;
//         }

//         const query = {
//             category,
//             seats: parseInt(seats, 10),
//         };

//         if (priceKey) {
//             query[priceKey] = { $exists: true };
//         }

//         const fiteredCab = await cabModel.find(query);

//         res.json({
//             success: true,
//             fiteredCab,
//         });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({
//             success: false,
//             message: "Something went wrong. Please try again.",
//         });
//     }
// };


const cabModel = require("../Model/AllcabsModel");

exports.getfilteredCabs = async (req, res) => {
    try {
        const { category, seats, distance } = req.query;
        const distanceInKm = parseInt(distance, 10);

        // Determine the pricePerKm key to search based on the distance
        let priceKey;
        if (distanceInKm >= 0 && distanceInKm <= 25) {
            priceKey = "0-25";
        } else if (distanceInKm > 25 && distanceInKm <= 50) {
            priceKey = "26-50";
        } else if (distanceInKm > 50 && distanceInKm <= 75) {
            priceKey = "51-75";
        } else if (distanceInKm > 75 && distanceInKm <= 100) {
            priceKey = "76-100";
        } else if (distanceInKm > 100 && distanceInKm <= 150) {
            priceKey = "101-150";
        } else if (distanceInKm > 150 && distanceInKm <= 200) {
            priceKey = "151-200";
        } else if (distanceInKm > 200 && distanceInKm <= 250) {
            priceKey = "201-250";
        } else if (distanceInKm > 300) {
            priceKey = ">300";
        } else {
            priceKey = null;
        }

        const query = {
            category,
            seats: parseInt(seats, 10),
        };

        const filteredCabs = await cabModel.find(query);

        // Filter out irrelevant price ranges for each cab
        const result = filteredCabs.map(cab => {
            if (priceKey && cab.pricePerKm && cab.pricePerKm[priceKey]) {
                return {
                    ...cab.toObject(), // Convert mongoose document to plain object
                    pricePerKm: {
                        [priceKey]: cab.pricePerKm[priceKey]
                    }
                };
            } else {
                // If no priceKey or priceKey not found, omit the cab
                return null;
            }
        }).filter(cab => cab !== null); // Remove null entries

        res.json({
            success: true,
            fiteredCab: result,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
};
