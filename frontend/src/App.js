import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Store } from './Store';
import { Provider } from 'react-redux';
import Admin from './Pages/Admin';
import { CreateTable } from './Components/CreateTable';
import { UpdateTable } from './Components/updateTable';


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admin/create' element={<CreateTable/>}/>
            <Route path='/edit/:id' element={<UpdateTable/>} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
