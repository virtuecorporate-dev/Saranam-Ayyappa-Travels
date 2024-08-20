import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function(){
    const[name,setName]=useState([]);
    const[imageUrl,setImageUrl]=useState('');
    const[category,setCategory]=useState('');
    const[services,setServices]=useState([]);
    const[serviceName,setServiceName]=useState('');
    const[file,setFile]=useState(null);
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const addService=(e)=>{
        e.preventDefault();
        if(serviceName.trim()){
            setServices([...services,{name:serviceName}]);
            setServiceName("")
        }
    }
    const handleFileChange =(e)=>{
        const selectedFile=e.target.files[0]
        setFile(selectedFile);
        setImageUrl(URL.createObjectURL(selectedFile))
    }

    const handleSubmit= async(e)=>{
        try {
            e.preventDefault(); 
            const formData= new formData();
            formData.append("name",name);
            formData.append("services",services);
            formData.append("category",category);
            if(file){
                formData.append("image",imageUrl);
            }
    
            const response = await axios.post('http://localhost:8000/api/v1/createHoliday',formData,{
                headers:{
                    "Content-type" : "multipart/form-data"
                }
            });
          
            dispatch(addHoliday(response.data.holidays));  
            navigate('/holiday')
        } catch (error) {
            console.log("error",error.message)
        }
      
    }
    return(
        <Fragment>
                <div className="container create">
                    <form action="" className="create-table" onSubmit={handleSubmit}>
                        <div className="create-head">
                            <h2>Create Holiday Package</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="serviceName">Services</label>
                            <input type="text" id="name" value={serviceName} onChange={(e)=>setServiceName(e.target.value)}/>
                            <button onClick={addService}>
                                Add Services
                            </button>
                        </div>
                        <div className="form-group">
                            {
                                services.map((service,index)=>{
                                    <ul>
                                        <li key={index}>{service.name}</li>
                                    </ul>
                                })
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">category</label>
                            <input type="text" id="category" onchange={(e)=>setCategory(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image</label>
                            <input type="file" id="imageUrl" onchange={handleFileChange} />
                        </div>

                        {
                            imageUrl &&(
                                <div>
                                    <img src={imageUrl} alt={name} style={{ width: '200px', height: 'auto' }} />
                                </div>
                            )
                            
                            
                        }
                                <button className="create-submit mb-3" type="submit">Create</button>

                    </form>
                </div>
        </Fragment>
    )
}