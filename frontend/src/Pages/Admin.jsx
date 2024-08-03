import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Render nothing while checking authentication
  }

  return (
    <div>
      <Table />
    </div>
  );
}

export default Admin;
