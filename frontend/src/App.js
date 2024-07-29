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
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admin/create' element={<CreateTable/>}/>
            <Route path='/cars' element={<Cars/>}/>
            <Route path='/edit/:id' element={<UpdateTable/>} />
            <Route path='/confirmbooking' element={<ConfirmBooking/>}/>
            {/* <Route path='/login' element= {<LoginPage/>}/> */}
            <Route path='/register' element= {<RegisterPage/>}/>

          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
