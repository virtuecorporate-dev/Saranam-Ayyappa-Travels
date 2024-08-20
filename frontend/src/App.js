import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Store } from './Store';
import { Provider } from 'react-redux';
import Admin from './Pages/Admin';
import { CreateTable } from './Components/CreateTable';
import Cars from './Pages/Cars';
import { UpdateTable } from './Components/updateTable';
import ConfirmBooking from './Pages/Confirm Booking';
import About from './Pages/About';
import TermsConditions from './Pages/Terms & Conditions';
import Service from './Pages/Service';
import ScrollToTop from './Components/scrollToTop';
import Contact from './Pages/Contact';
import Login1 from './Pages/Login1';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TourPackages from './Pages/Tourpackages';
import { Table } from 'react-bootstrap';
import Holiday from './Components/Holiday';
import CreateHoliday from './Components/createHoliday';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin/>}/>
            {/* // {isAuthenticated ? <Admin /> : <Navigate to="/login" />} /> */}
            <Route path='/table' element={<Table/>}/>
            <Route path="/admin/create" element={<CreateTable />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/edit/:id" element={<UpdateTable />} />
            <Route path="/confirmbooking" element={<ConfirmBooking />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/login" element={<Login1 setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="/holidayPackage" element={<Service />} />
            <Route path='/tourPackage' element={<TourPackages/>}/>
            <Route path='/holiday' element={<Holiday/>}/>
            <Route path='/holiday/create' element={<CreateHoliday/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer/>

    </Provider>
  );
}

export default App;
