import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ScrollToTop from './Components/scrollToTop'
import Contact from './Pages/Contact';
import RegisterPage from './Pages/Register';
import LoginPopup from './Pages/Login';


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Navbar/>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admin/create' element={<CreateTable/>}/>
            <Route path='/cars' element={<Cars/>}/>
            <Route path='/edit/:id' element={<UpdateTable/>} />
            <Route path='/confirmbooking' element={<ConfirmBooking/>}/>
            <Route path='/contactus' element= {<Contact/>}/>
            <Route path='/register' element= {<RegisterPage/>}/>
            <Route path='/login' element={<LoginPopup/>}/>
            <Route path='/terms&conditions' element={<TermsConditions/>}/>
            <Route path='/services' element={<Service/>}/>


          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
