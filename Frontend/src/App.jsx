import React from 'react';
import { AuthProvider } from './Authcontext';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import ContactUs from './Components/ContactUs/ContactUs';
import Youtuber from './Pages/Youtuber';
import YoutuberDetails from './Pages/YoutuberDetails/YoutuberDetails';



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/youtuber' element={<Youtuber />}></Route>
          <Route path='/youtuberdetails' element={<YoutuberDetails />}></Route>
        </Routes>
       
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
