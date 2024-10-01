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
        if(selectedFile){
            setImageUrl(URL.createObjectURL(selectedFile))
        }
    }   
    const handlePdfChange = (e)=>{
        const selectedPdf = e.target.files[0];
        if(selectedPdf){
            setPdf(selectedPdf)
        }
    }

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = { name, category, services, imageUrl, pdf };
            const response = await axios.put(`http://localhost:8000/api/v1/updateHoliday/${id}`, formData);

            dispatch(updateHoliday(response.data.holiday));
            navigate('/tour');
        } catch (error) {
            console.log(error.message);
        }
    };

    return(
        <Fragment>
        <div className="container create">
            <form className="create-table" onSubmit={handleSubmit}>
                <div className="create-head">
                    <h2>Update Your Holiday Details</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="serviceName">Services</label>
                    <input
                        type="text"
                        id="serviceName"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                    <button onClick={addService}>Add Services</button>
                </div>
                <div className="form-group">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>{service.name}
                            <button onClick={()=>removeService(index)}>Remove</button>
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

                <button className="create-submit mb-3" type="submit">Update</button>
            </form>
        </div>
    </Fragment>
    )
}