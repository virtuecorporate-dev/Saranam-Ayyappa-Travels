const cabModel = require("../Model/AllcabsModel");
exports.getfilteredCabs = async (req, res) => {
    try {
        const { category, distance, localTripType } = req.query;
        const distanceInKm = parseInt(distance, 10);

        // Determine the correct range key based on the distance (only for Drop Trip)
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

        // Build the filter conditions based on the category

        const filterConditions = { category };
        // If it's a Drop Trip, filter by pricePerKm and distance

        if (category === "Drop Trip") {
            filterConditions[`pricePerKm.${distanceKey}`] = { $exists: true };
        }

        // If it's a Local Trip, filter by localTripType instead

        if (category === "Local Trip" && localTripType) {
            filterConditions[`localTripType.${localTripType}`] = { $exists: true };
        }

        // Find the filtered cabs
        const filteredCabs = await cabModel.find(filterConditions).lean();
        // Process the result based on the category
        const result = filteredCabs.map(cab => {
            if (category === "Drop Trip") {
                // For Drop Trip, return the pricePerKm based on distance
                return {
                    ...cab,
                    pricePerKm: {
                        [distanceKey]: cab.pricePerKm[distanceKey]
                    },
                    // distance: distanceInKm 
                };
            } else if (category === "Local Trip" && localTripType) {
                // For Local Trip, return the local trip pricing details
                return {
                    ...cab,
                    localTripType: {
                        [localTripType]: cab.localTripType[localTripType]
                    }
                };
            }
            return cab;
        });

        // Check if result is empty and return appropriate response

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No cabs found matching the criteria.",
            });
        }
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




