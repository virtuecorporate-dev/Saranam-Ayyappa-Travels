import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateHoliday } from "../Slice/holidaySlice";

export default function UpdateHoliday() {
    const holidays = useSelector(state => state.holidays.holidays);
    console.log("holidays", holidays);

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Find the holiday to update from the list using the ID
    const holiday = holidays.find(u => u._id === id); // Fixed `id` to `_id` assuming MongoDB object ID
    console.log("holiday", holiday);

    // Initialize state with the holiday details
    const [name, setName] = useState(holiday?.name || "");
    const [imageUrl, setImageUrl] = useState(holiday?.imageUrl || "");
    const [services, setServices] = useState(holiday?.services || []);
    const [serviceName, setServiceName] = useState("");
    const [category, setCategory] = useState(holiday?.category || "");
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (holiday) {
            setName(holiday.name);
            setImageUrl(holiday.imageUrl);
            setServices(holiday.services);
            setCategory(holiday.category);
        }
    }, [holiday]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setImageUrl(URL.createObjectURL(selectedFile));
    };

    const addService = (e) => {
        e.preventDefault();
        if (serviceName.trim()) {
            setServices([...services, { name: serviceName }]);
            setServiceName("");
        }
    };

    const deleteService = (serviceId) => {
        const updatedServices = services.filter(service => service._id !== serviceId);
        setServices(updatedServices);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = { name, services, imageUrl, category };
            const response = await axios.put(`http://localhost:8000/api/v1/updateHoliday/${id}`, formData);
            dispatch(updateHoliday(response.data.holidays));
            navigate('/holiday');
        } catch (error) {
            console.log("error", error.message);
        }
    };

    return (
        <Fragment>
            <div className="container create">
                <form className="create-table" onSubmit={handleUpdate}>
                    <h2 className="create-head">Update Your Holiday Package Details</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="services">Services</label>
                        <input
                            type="text"
                            id="services"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                        <button onClick={addService}>Add Service</button>
                    </div>
                    <div className="form-group">
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>
                                    {service.name}
                                    <button onClick={() => deleteService(service._id)}>
                                        <i className="fa-regular fa-circle-xmark"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleFileChange}
                        />
                        {imageUrl && (
                            <div>
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    style={{ width: '200px', height: 'auto' }}
                                />
                            </div>
                        )}
                    </div>
                    <button className="create-submit mb-3" type="submit">Update</button>
                </form>
            </div>
        </Fragment>
    );
}
