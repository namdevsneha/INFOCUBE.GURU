import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Career from './Pages/Career';
// import Alumini from './Pages/Alumini';
import Feedback from './Pages/Feedback';
import Help from './Pages/Help';
import Privacy from './Pages/Privacy';
import SignUp from './Pages/SignUp';
import Terms from './Pages/Terms';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Preloader from './Components/PreLoader';


function App() {
  return( <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Career' element={<Career/>}/> */}
      {/* <Route path='/Alumini' element={<Alumini/>}/> */}
      <Route path='/Feedback' element={<Feedback/>}/>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Terms' element={<Terms/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>)
  }

export default App;
