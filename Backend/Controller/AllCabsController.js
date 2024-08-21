// const cabModel = require("../Model/AllcabsModel");

// exports.getfilteredCabs = async (req, res) => {
//     try {
//         const { category, seats, distance } = req.query;
//         const distanceInKm = parseInt(distance, 10);

//         // Determine the correct range key based on the distance
//         let distanceKey = "";
//         if (distanceInKm >= 0 && distanceInKm <= 25) {
//             distanceKey = "0-25";
//         } else if (distanceInKm > 25 && distanceInKm <= 50) {
//             distanceKey = "26-50";
//         } else if (distanceInKm > 50 && distanceInKm <= 75) {
//             distanceKey = "51-75";
//         } else if (distanceInKm > 75 && distanceInKm <= 100) {
//             distanceKey = "76-100";
//         } else if (distanceInKm > 100 && distanceInKm <= 150) {
//             distanceKey = "101-150";
//         } else if (distanceInKm > 150 && distanceInKm <= 200) {
//             distanceKey = "151-200";
//         } else if (distanceInKm > 200 && distanceInKm <= 250) {
//             distanceKey = "201-250";
//         } else if (distanceInKm > 300) {
//             distanceKey = ">300";
//         }

//         const filteredCabs = await cabModel.find({
//             category,
//             seats: parseInt(seats, 10),
//             [`pricePerKm.${distanceKey}`]: { $exists: true }
//         }).lean(); // Use lean() to get plain JavaScript objects

       
//         const result = filteredCabs.map(cab => ({
//             ...cab,
//             pricePerKm: {
//                 [distanceKey]: cab.pricePerKm[distanceKey]
//             }
//         }));

//         res.json({
//             success: true,
//             filteredCabs: result
//         });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };

const cabModel = require("../Model/AllcabsModel");

exports.getfilteredCabs = async (req, res) => {
    try {
        const { category, distance } = req.query;
        const distanceInKm = parseInt(distance, 10);

        // Determine the correct range key based on the distance
        let distanceKey = "";
        if (distanceInKm >= 0 && distanceInKm <= 25) {
            distanceKey = "0-25";
        } else if (distanceInKm > 25 && distanceInKm <= 50) {
            distanceKey = "26-50";
        } else if (distanceInKm > 50 && distanceInKm <= 75) {
            distanceKey = "51-75";
        } else if (distanceInKm > 75 && distanceInKm <= 100) {
            distanceKey = "76-100";
        } else if (distanceInKm > 100 && distanceInKm <= 150) {
            distanceKey = "101-150";
        } else if (distanceInKm > 150 && distanceInKm <= 200) {
            distanceKey = "151-200";
        } else if (distanceInKm > 200 && distanceInKm <= 250) {
            distanceKey = "201-250";
        } else if (distanceInKm > 300) {
            distanceKey = ">300";
        }

        const filteredCabs = await cabModel.find({
            category,
            // seats: parseInt(seats, 10),
            [`pricePerKm.${distanceKey}`]: { $exists: true }
        }).lean(); // Use lean() to get plain JavaScript objects

       
        const result = filteredCabs.map(cab => ({
            ...cab,
            pricePerKm: {
                [distanceKey]: cab.pricePerKm[distanceKey]
            }
        }));

        res.json({
            success: true,
            filteredCabs: result
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

