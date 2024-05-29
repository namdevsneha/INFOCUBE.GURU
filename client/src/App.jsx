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
import Preloader from './Components/PreLoader';
import Login from './Pages/Login';
import Profile from './Pages/Profile-sneha.jsx';
import Verification from "./Pages/Verification.jsx";
import Profile_noddy from './Pages/Profile-noddy.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import SignupForm from './Pages/SignUpForm.jsx';


function App() {
  const [loading, setLoading] = useState(false); 
  const showHeader = useSelector((state) => state.showHeader.showheader);


  useEffect(() => {
    // Simulate loading time, you can replace this with your actual loading logic
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'none';
    }, 0);

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, []);
  
  return(
    <div className="overflow-x-hidden" > {loading?<Preloader/>: <BrowserRouter>
    {showHeader?<Header/>:""}
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
      <Route path='/Verification' element={<Verification/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/Profile' element={<Profile/>}/>
      </Route>
    </Routes>
    {showHeader?<Footer/>:""}
    </BrowserRouter>}
    </div>)
  }

export default App;
