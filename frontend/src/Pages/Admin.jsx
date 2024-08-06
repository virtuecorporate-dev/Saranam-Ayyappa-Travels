import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';

function Admin() {
  

  return (
    <div>
      <Table />
    </div>
  );
}

export default Admin;


// const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Check if user is authenticated
  //   const user = localStorage.getItem('user');
  //   if (!user) {
  //     navigate('/login'); // Redirect to login if not authenticated
  //   } else {
  //     setIsAuthenticated(true);
  //   }
  // }, [navigate]);

  // if (!isAuthenticated) {
  //   return null; // Render nothing while checking authentication
  // }