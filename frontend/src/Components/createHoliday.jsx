import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateHoliday() {
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]); // Array of category objects
    const [categoryName, setCategoryName] = useState(""); // Input for category name
    const [services, setServices] = useState([]); // Array of services with name field
    const [serviceName, setServiceName] = useState(""); // Input for service name
    const [file, setFile] = useState(null); // Image file
    const [pdf, setPdf] = useState(null); // PDF file
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Add a service to the services array
    const addService = (e) => {
        e.preventDefault();
        if (serviceName.trim()) {
            setServices([...services, { name: serviceName }]); // Push service object with name
            setServiceName(""); // Clear service input field
        }
    };

    // Remove a service from the array
    const removeService = (index) => {
        const updatedServices = services.filter((_, i) => i !== index);
        setServices(updatedServices);
    };

    // Add a category to the categories array
    const addCategory = (e) => {
        e.preventDefault();
        if (categoryName.trim()) {
            setCategories([...categories, { name: categoryName }]); // Push category object with name
            setCategoryName(""); // Clear category input field
        }
    };

    // Remove a category from the array
    const removeCategory = (index) => {
        const updatedCategories = categories.filter((_, i) => i !== index);
        setCategories(updatedCategories);
    };

    // Handle image file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile); // Set image file
    };

    // Handle PDF file change
    const handlePdfChange = (e) => {
        const selectedPdf = e.target.files[0];
        setPdf(selectedPdf); // Set PDF file
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append("name", name);
            // Append categories as an array of objects
            categories.forEach((category, index) => {
                formData.append(`category[${index}][name]`, category.name);
            });
            formData.append("imageUrl", file); // Add image file
            formData.append("pdf", pdf); // Add PDF file

            // Append services as an array of objects
            services.forEach((service, index) => {
                formData.append(`services[${index}][name]`, service.name);
            });

            const response = await axios.post(
                '${process.env.REACT_APP_ALL_CARS}/createHoliday',
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                }
            );

            if (response.data && response.data.holiday) {
                dispatch(addHoliday(response.data.holiday));
                navigate('/holiday');
            } else {
                console.error("Holiday data is undefined or missing in response.");
            }
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    return (
        <Fragment>
            <div className="container create">
                <form className="create-table" onSubmit={handleSubmit}>
                    <div className="create-head">
                        <h2>Create Holiday Package</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Services Section */}
                    <div className="form-group">
                        <label htmlFor="serviceName">Services</label>
                        <input
                            type="text"
                            id="serviceName"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                        <button type="button" onClick={addService}>
                            Add Service
                        </button>
                    </div>
                    <div className="form-group">
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>
                                    {service.name}
                                    <button
                                        type="button"
                                        onClick={() => removeService(index)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div className="form-group">
                        <label htmlFor="category">Categories</label>
                        <input
                            type="text"
                            id="category"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <button type="button" onClick={addCategory}>
                            Add Category
                        </button>
                    </div>
                    <div className="form-group">
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    {category.name}
                                    <button
                                        type="button"
                                        onClick={() => removeCategory(index)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image and PDF File Inputs */}
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image</label>
                        <input
                            type="file"
                            id="imageUrl"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    {file && (
                        <div>
                            <p>Image Selected: {file.name}</p>
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="pdfFile">PDF</label>
                        <input
                            type="file"
                            accept="application/pdf"
                            id="pdfFile"
                            onChange={handlePdfChange}
                        />
                    </div>
                    {pdf && (
                        <div>
                            <p>PDF Selected: {pdf.name}</p>
                        </div>
                    )}

                    <div>
                        <button className="create-submit" type="submit">
                            Create
                        </button>
                        <Link to="/holiday">
                            <button className="create-cancel" type="button">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
