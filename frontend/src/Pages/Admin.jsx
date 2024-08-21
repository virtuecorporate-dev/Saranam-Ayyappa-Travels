// import React, { useState } from 'react';
// import Table from '../Components/Table';
// import { Link } from 'react-router-dom';
// function Admin() {
  
//   const[car,setCar]=useState(false);
//   const[holiday,setHoliday]=useState(false);
//   const[tour,setTour]=useState(false);
  
//   return (
//     <div>
//         <div className="container">
//           <div className="row adminPanel">
//           <div className="col-lg-3 col-sm-12">
//             <Link to='/table'><button value={car} onClick={()=>setCar(true)}>Create Car</button></Link>
//           </div>
//           <div className="col-lg-3 col-sm-12">
//           <Link to='/createHoliday'><button value={holiday} onClick={()=>setHoliday(true)}> Holiday Package</button></Link>
//           </div>
//           <div className="col-lg-3 col-sm-12"> 
//             <Link to='/createTour'><button value={tour} onClick={()=>setTour(true)}> Tour Package</button></Link>
//           </div>
//           </div>
        
          
//         </div>
//       <Table />
//     </div>
//   );
// }

// export default Admin;
import React from 'react';
import Table from '../Components/Table';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <div className="container">
        <div className="row adminPanel">
          <div className="col-lg-3 col-sm-12">
            <Link to='/table'>
              <button>Create Car</button>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-12">
            <Link to='/holiday'>
              <button>Holiday Package</button>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-12">
            <Link to='/createTour'>
              <button>Tour Package</button>
            </Link>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Admin;

