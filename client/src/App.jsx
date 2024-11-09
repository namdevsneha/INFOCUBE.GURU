import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showHeader,hideHeader } from './Redux/userSlice/loginSlice.js';

import Home from './Pages/Home/Home.jsx';
import Feedback from './Pages/Feedback/Feedback.jsx'

import Help from './Pages/Help/Help.jsx';
import Privacy from './Pages/Privacy';
import SignUp from './Pages/Auth/SignUp.jsx';
import Terms from './Pages/Terms';
import Header from './Components/header/Header.jsx';
import Footer from './Components/Footer';
import Login from './Pages/Auth/Login.jsx';
import Profile from './Pages/Profile-sneha.jsx';
import Verification from "./Pages/ForgotPassword/Verification.jsx";
import PrivateRoute from './Components/privateRoute/PrivateRoute.jsx';
import ForgotPasswordPrivateRoute from './Components/privateRoute/forgotPasswordRoute.jsx';
import SignupForm from './Pages/Auth/SignUpForm.jsx';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';
import ChangePassword from './Pages/ForgotPassword/ChangePassword.jsx';
import CarrerOptions from './Pages/CarrerOption/CarrerOptions.jsx';

//CarrerOption
import Lawyer from './Pages/CarrerOption/Career/Lawyer.jsx';

import { setSize } from './Redux/userSlice/screenSizeSlice.js';

import ScrollToTop from './Components/ScrollToTop.jsx';
import ScrollToElement from './Components/ScrollToElement.jsx';
import { closeDropDown } from './Redux/userSlice/navDropDown.js';
import { closeNav } from './Redux/IsOpenSlice.js';
import FeedbackPrivateRoute from './Components/privateRoute/FeedbackRoute.jsx';
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
    <div onClickCapture={handleWheel}  onWheel={handleWheel} className="overflow-x-hidden" > 
     <BrowserRouter>
    {showHeader?<Header/>:""}
    <ScrollToElement/>
    <ScrollToTop/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Alumini' element={<Alumini/>}/> */}
      <Route element={<FeedbackPrivateRoute/>}>
      <Route path='/Feedback' element={<Feedback/>}/>
      </Route>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Terms' element={<Terms/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUpForm' element={<SignupForm/>}/>
      <Route path='/ChangePassword' element={<ChangePassword/>}/>

      <Route element={<ForgotPasswordPrivateRoute/>}>
      <Route path='/ForgotPassVerification' element={<Verification/>}/>
      </Route>

      <Route path='/feedbaack' element={<Feedback/>}/>
      <Route path='/career' element={<CarrerOptions/>}/>
      
      <Route element={<PrivateRoute/>}>
      <Route path='/Profile' element={<Profile/>}/>
      </Route>
      <>
      <Route path='/Career/Lawyer' element={<Lawyer/>}/>
      </>


      <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      </Routes>

    {showHeader?<Footer/>:""}
    </BrowserRouter>
    </div>)
  }

export default App;
