import { Fragment, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams , useNavigate} from "react-router-dom"
import { updateHoliday } from "../Slice/holidaySlice";
import axios from "axios";

export default function UpdateHoliday(){
    const holidays= useSelector(state=>state.holidays.holidays)
    const {id} = useParams();
    const holiday = holidays.find(u=>u.id === id);
    
    const[name,setName] = useState(holiday?.name || '');
    const[services,setServices]=useState(holiday?.services ||[]);
    const[imageUrl,setImageUrl] = useState(holiday?.imageUrl || '');
    const[pdf,setPdf]=useState(holiday?.pdf || '');
    const[serviceName,setServiceName]=useState('');
    const[category,setCategory]=useState(''); 
    const[file,setFile] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addService =(e)=>{
        e.preventDefault();
        if(serviceName.trim()){
            setServices([...services,{name:serviceName}]);
        setServiceName('')
        }
        
    }

    const removeService = (index)=>{
        const updatedServices= services.filter(i=>i !== index);
        setServices(updatedServices)
    }

    const handleFileChange =(e)=>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
      
    }   
    const handlePdfChange = (e)=>{
        const selectedPdf = e.target.files[0];
        if(selectedPdf){
            setPdf(selectedPdf)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        
        formData.append('name', name);
        formData.append('category', category);
        formData.append('services', JSON.stringify(services)); // Convert services to a JSON string
        
        if (file) {
            formData.append('imageUrl', file);  // Add image file if selected
        }
    
        if (pdf) {
            formData.append('pdf', pdf);  // Add PDF file if selected
        }
    
        try {
            const response = await axios.put(`http://localhost:8000/api/v1/updateHoliday/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Make sure the content type is set for FormData
                }
            });
    
            dispatch(updateHoliday(response.data.holiday));
            navigate('/holiday');
        } catch (error) {
            console.log(error.message);
        }
    };
    

    return(
        <Fragment>
        <div className="container create">
            <form className="create-table" onSubmit={handleSubmit}>
                <div className="create-head">
                    <h2>update Holiday Package</h2>
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
                            <li key={index}>
                                {service.name}
                                <button type="button" onClick={() => removeService(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="Basic">Basic</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image</label>
                    <input type="file" id="imageUrl" accept="image/*" onChange={handleFileChange} />
                </div>
                {file && (
                    <div>
                        <p>Image Selected: {file.name}</p>
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="pdfFile">PDF</label>
                    <input type="file" accept="application/pdf" id="pdfFile" onChange={handlePdfChange} />
                </div>
                {pdf && (
                    <div>
                        <p>PDF Selected: {pdf.name}</p>
                    </div>
                )}
                <button className="create-submit mb-3" type="submit">Update</button>
            </form>
        </div>
    </Fragment>
    )
}