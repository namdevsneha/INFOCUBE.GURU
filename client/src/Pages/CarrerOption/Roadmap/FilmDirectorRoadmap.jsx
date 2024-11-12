import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import filmDirectorRoadmap from '../../../Assets/Images/filmDirectorRoadmap.png'
import arrowBackIcon from '../../../Assets/Images/arrowBackIcon.png'
import lockIcon from '../../../Assets/Images/lockIcon.png'
import './rightMenu.css'
import close from "../../../Assets/Images/close.png";
import { filmDirectorData } from './Data';


export default function FilmDirectorRoadmap() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const toggleMenu = (event) => {
    setIsOpen(!isOpen);
    setId(event.target.id);
  };
  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault(); // prevents the default right-click menu from appearing
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById('image');
    rootElement.addEventListener('contextmenu', handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <div id='mainsection' className='  mt-[20px] md:mt-[3vw] py-[7vw] mx-[2vw] md:mx-[1vw]'>
        <span className='hidden md:block md:ml-[20vw] text-blue-800 cursor-pointer text-smallText'><Link to='./../../../'>Home</Link> / <Link to='./../../'>Career Paths</Link> / Film Director / Roadmap</span>
    <div className='hidden md:flex  font-roboto flex-row gap-[2vw] '>
      <div className='w-[18.75vw] hidden md:block h-full text-regularText'>
      <Link to='../Signup'>
        <div className='py-[.75vw] flex flex-row cursor-pointer'>
          <h6 className='relative  font-bold text-h6Text'>Home</h6>
          <img className='ml-auto h-[1.5vw] w-auto  ' onClick={()=>{}} src={arrowBackIcon} alt='Arrow Back Icon' />
        </div>
        </Link>
        <div className='py-[.75vw] flex flex-row'>
          <span className='relative '>About</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row'>
          <span className='relative   '>Educational Skillset</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row'>
          <span className='relative   '>Skills Required</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row'>
          <span className='relative   '>Institutes For Filmaking</span>
          <img className='ml-auto h-[1.5vw] w-auto ' src={lockIcon} alt='Arrow Back Icon' />
        </div>

        <div className='py-[.75vw] flex flex-row cursor-pointer'>
          <span className='relative   '>Roadmap</span>
        </div>
        
        
      </div>
      <div className='md:w-auto w-full   font-bold flex flex-col gap-[1.5vw] '>
        <h2 className='text-h2Text '>
        Narrowed Roadmap<br/>
        To Become Film Director
        </h2>
        
        <span className='font-roboto font-normal text-mediumText'>Step by step guide to become a Film Director in 2024</span>
        <div className='w-full  relative flex flex-col  items-center'>
        <img id='image' className='h-[100vw] relative w-auto' src={filmDirectorRoadmap} alt='Film Director Roadmap' />
        {/* Buttons for overlays  */}
        <button id="FilmDirector" className='w-[8vw] h-[3.5vw]  top-[7vw] left-[22.5vw] absolute' onClick={toggleMenu}/>
        <button id="Education" className=' leading-16  narrowed-diamond top-[12.2vw] left-[21.8vw] rounded-lg absolute' onClick={toggleMenu}/>

        <button id="Skills" className=' leading-16  diamond top-[5vw] left-[44.1vw] rounded-lg absolute' onClick={toggleMenu}/>
        <button id="Tips" className=' leading-16  diamond top-[10.6vw] left-[44.1vw] rounded-lg absolute' onClick={toggleMenu}/>
        <button id="9-10" className='w-[4vw] h-[4vw] cursor-default rounded-full  top-[17.5vw] left-[24.5vw] absolute' />
        <button id="11-12" className='w-[7.4vw] h-[4.2vw]  top-[26.5vw] left-[17.2vw] absolute' onClick={toggleMenu}/>
        
        <button id="NID" className='w-[7.4vw] h-[2.5vw]  top-[21vw] left-[3.3vw] absolute' onClick={toggleMenu}/>
        <button id="AAFT" className='w-[7.4vw] h-[2.5vw] top-[24vw] left-[3.3vw] absolute' onClick={toggleMenu}/>
        <button id="JMIEE" className='w-[7.4vw] h-[2.8vw]  top-[27.1vw] left-[3.3vw] absolute' onClick={toggleMenu}/>
        <button id="KRNNIVA" className='w-[7.5vw] h-[2.2vw] top-[31.3vw] left-[3.3vw] absolute' onClick={toggleMenu}/>
        <button id="JNAFU" className='w-[7.5vw] h-[2.2vw]  top-[34.8vw] left-[3.3vw] absolute' onClick={toggleMenu}/>
        

        <button id="Diploma" className='w-[6.5vw] h-[3.8vw]  top-[26.5vw] left-[28.75vw] absolute' onClick={toggleMenu}/>
        <button id="UG" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[36vw] left-[23.2vw] absolute' onClick={toggleMenu}/>
        <button id="Abroad" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[36vw] left-[35.2vw] absolute' onClick={toggleMenu}/>
        <button id="Europe" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[25vw] left-[49.4vw] absolute' onClick={toggleMenu}/>
        <button id="Australia" className='w-[8vw] h-[3.1vw] rounded-[1.5vw]  top-[29.5vw] left-[49.4vw] absolute' onClick={toggleMenu}/>
        <button id="Canada" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[33.8vw] left-[49.4vw] absolute' onClick={toggleMenu}/>
        <button id="US" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[38.2vw] left-[49.4vw] absolute' onClick={toggleMenu}/>
        <button id="Asia" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[42.6vw] left-[49.4vw] absolute' onClick={toggleMenu}/>
        <button id="Australia" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[47vw] left-[49.4vw] absolute' onClick={toggleMenu}/>


        <button id="India" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[44vw] left-[35.2vw] absolute' onClick={toggleMenu}/>

        <button id="India" className='w-[6.5vw] h-[3.1vw] rounded-[1.5vw]  top-[42.3vw] left-[23.2vw] absolute' onClick={toggleMenu}/>
        <button id="BSc" className='w-[8.9vw] h-[2.9vw] rounded-[1.5vw]  top-[53.2vw] left-[22vw] absolute' onClick={toggleMenu}/>
        <button id="BFA" className='w-[8.2vw] h-[2.7vw] rounded-[1.5vw]  top-[52.8vw] left-[1.6vw] absolute' onClick={toggleMenu}/>
        <button id="BA" className='w-[8.9vw] h-[2.9vw] rounded-[1.5vw]  top-[52.8vw] left-[11.4vw] absolute' onClick={toggleMenu}/>
        <button id="BComm" className='w-[8.9vw] h-[2.9vw] rounded-[1.5vw]  top-[53.2vw] left-[32.6vw] absolute' onClick={toggleMenu}/>
        <button id="BSc" className='w-[6.5vw] h-[3vw] rounded-[1.5vw]  top-[53.3vw] left-[43.5vw] absolute' onClick={toggleMenu}/>

        <button id="JET" className='w-[8vw] h-[3.5vw]  top-[63vw] left-[22.5vw] absolute' onClick={toggleMenu}/>
        <button id="BSc" className='w-[8.9vw] h-[2.9vw] rounded-[1.5vw]  top-[69.7vw] left-[22vw] absolute' onClick={toggleMenu}/>
        <button id="BSc" className='w-[8.9vw] h-[2.9vw] rounded-[1.5vw]  top-[74.8vw] left-[22vw] absolute' onClick={toggleMenu}/>

        <button id="internship" className='w-[8.7vw] h-[2.9vw]  top-[82.5vw] left-[22.1vw] absolute' onClick={toggleMenu}/>
        <button id="portfolio" className='w-[8.7vw] h-[2.9vw]  top-[82.5vw] left-[11.5vw] absolute' onClick={toggleMenu}/>
        <button id="none" className='w-[8.7vw] h-[2.9vw]  top-[82.5vw] left-[33vw] absolute' onClick={toggleMenu}/>
        <button id="job" className='w-[8vw] h-[3.8vw]  top-[91.5vw] left-[22.5vw] absolute' onClick={toggleMenu}/>
        </div>
      </div>
      <div className='w-[18.75vw] hidden md:block h-full '>

      </div>
      {isOpen && (
        <SideMenu className="h-full" id={id} setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </div>
    <div className='flex flex-col flex-grow 'style={{height:`${innerHeight-192}px`}}>
    <span className='md:ml-[20vw] text-blue-800 cursor-pointer text-smallText'><Link to='./../../../'>Home</Link> / <Link to='./../../'>Career Paths</Link> / Film Director / Roadmap</span>
      <h2 className='font-bold my-auto py-auto  text-h4Text text-center'  >Coming Soon for mobile...</h2>
    </div>
    </div>

  );
}

const SideMenu=({isOpen,setIsOpen,id})=>{

  const data=filmDirectorData[id]

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scroll on cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Scroll Y Position:', currentScrollY); // Log for verification
      setScrollY(currentScrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeDialog = () => {
    setIsOpen(false);
  };
  console.log(data)
  return(

        <div className="fixed inset-0 flex  items-center justify-end bg-gray-900 bg-opacity-50 " >  
          <div className="bg-white font-poppins  ml-auto fixed w-[30vw] h-screen overflow-hidden px-[1.5vw]"   style={{paddingTop:scrollY<55?`${64-scrollY}px`:"1vw"}} >
            <div className='  flex flex-row items-center'>
            <h3 className='text-h4Text uppercase font-bold leading-[140%]'>{data.title}</h3>
              <img onClick={closeDialog} className='w-auto mb-auto mt-[.5vw] h-[12px] ml-auto cursor-pointer' src={close}/>
            </div>
            <div className='flex flex-col gap-[.5vw]'>
            
            <p className='pt-[.5vw] text-regularText font-roboto leading-[150%] text-gray-700'>{data.description}</p> 
            <div className='text-green-600 mb-[.5vw] font-roboto mx-auto w-[22.5vw] overflow-hidden text-center'>__________________________________________________________________________________________</div>
          
            </div>
            </div>
          <div className='fixed inset-0 z-30 bg-gray-900 bg-opacity-50 w-[70vw]' onClick={closeDialog}/>  
        </div>
        
        
  )
}