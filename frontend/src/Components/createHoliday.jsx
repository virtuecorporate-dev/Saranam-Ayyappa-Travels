import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [services, setServices] = useState([]);
    const [serviceName, setServiceName] = useState('');
    const [file, setFile] = useState(null);
    const [pdf, setPdf] = useState(null); // Change initial value to null for file handling
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addService = (e) => {
        e.preventDefault();
        if (serviceName.trim()) {
            setServices([...services, { name: serviceName }]);
            setServiceName("");
        }
    };
    const removeService = (index) => {
        const updatedServices = services.filter((_, i) => i !== index);
        setServices(updatedServices);
    };


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setImageUrl(URL.createObjectURL(selectedFile));
    };

    const handlePdfChange = (e) => {
        const selectedPdf = e.target.files[0];
        setPdf(selectedPdf);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append("name", name);
            formData.append("category", category);
            formData.append("imageUrl", file);  // Append the file for image
            formData.append("pdf", pdf); // Append the PDF file

            services.forEach((service, index) => {
                formData.append(`services[${index}][name]`, service.name);
            });

            const response = await axios.post(
                'http://localhost:8000/api/v1/createHoliday',
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
                <form action="" className="create-table" onSubmit={handleSubmit}>
                    <div className="create-head">
                        <h2>Create Holiday Package</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceName">Services</label>
                        <input type="text" id="serviceName" value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
                        <button onClick={addService}>Add Services</button>
                    </div>
                    <div className="form-group">
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>{service.name}
                                 <button onClick={addService}>Add Services</button></li>
                            ))}
                        </ul>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="Basic">Basic</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image</label>
                        <input type="file" id="imageUrl" accept="image/*" onChange={handleFileChange} />
                    </div>

                    {imageUrl && (
                        <div>
                            <img src={imageUrl} alt={name} style={{ width: '200px', height: 'auto' }} />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="pdfFile">PDF</label>
                        <input type="file" accept="application/pdf" id="pdfFile" onChange={handlePdfChange} />
                    </div>

                    {pdf && (
                        <div>
                            <a href={URL.createObjectURL(pdf)} target="_blank" rel="noopener noreferrer">
                                View PDF
                            </a>
                        </div>
                    )}

                    <button className="create-submit mb-3" type="submit">Create</button>
                </form>
            </div>
        </Fragment>
    );
}
