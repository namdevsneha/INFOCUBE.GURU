import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showHeader,hideHeader } from './Redux/userSlice/loginSlice.js';

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
import Login from './Pages/Login';
import Profile from './Pages/Profile-sneha.jsx';
import Verification from "./Pages/Verification.jsx";
import Profile_noddy from './Pages/Profile-noddy.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import ForgotPasswordPrivateRoute from './Components/privateRoute/forgotPasswordRoute.jsx';
import SignupForm from './Pages/SignUpForm.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import ChangePassword from './Pages/ChangePassword.jsx';
import { setSize } from './Redux/userSlice/screenSizeSlice.js';

import ScrollToTop from './Pages/ScrollToTop.jsx';
import ScrollToElement from './Pages/ScrollToElement.jsx';
import { closeDropDown } from './Redux/userSlice/navDropDown.js';
import { closeNav } from './Redux/IsOpenSlice.js';
// import { Router } from 'express';

function App() {
  const [loading, setLoading] = useState(false); 
  const showHeader = useSelector((state) => state.showHeader.showheader);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const handleResize = () => {
      dispatch(setSize({'innerWidth':window.innerWidth,'innerHeight':window.innerHeight,
        'outerWidth':window.outerWidth,'outerHeight':window.outerHeight}));
      
    };
    handleResize(); // Call initially
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };

  }, [dispatch]);

  const handleWheel = () => {
    dispatch(closeNav());
    dispatch(closeDropDown());
  };

  
  return(
    <div onTouchStart={handleWheel} onWheel={handleWheel} className="overflow-x-hidden" > 
     <BrowserRouter>
    {showHeader?<Header/>:""}
    <ScrollToElement/>
    <ScrollToTop/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Career' element={<Career/>}/> */}
      {/* <Route path='/Alumini' element={<Alumini/>}/> */}
      <Route element={<PrivateRoute/>}>
      <Route path='/Feedback' element={<Feedback/>}/>
      </Route>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Terms' element={<Terms/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/ProfileNoddy' element={<Profile_noddy/>}/>
      <Route path='/SignUpForm' element={<SignupForm/>}/>
      <Route path='/ChangePassword' element={<ChangePassword/>}/>

      <Route element={<ForgotPasswordPrivateRoute/>}>
      <Route path='/ForgotPassVerification' element={<Verification/>}/>
      </Route>

      

      <Route element={<PrivateRoute/>}>
      <Route path='/Profile' element={<Profile/>}/>
      </Route>

      <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      </Routes>

    {showHeader?<Footer/>:""}
    </BrowserRouter>
    </div>)
  }

export default App;
