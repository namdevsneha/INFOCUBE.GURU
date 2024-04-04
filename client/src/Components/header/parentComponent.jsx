import React, { useState } from 'react';
import Nav from './Nav';
import StartingVideo from '../Home/mobile/Video';
function ParentComponent() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <Nav isOpen={isOpen} toggleNavbar={toggleNavbar} />
        {/* {isOpen && <StartingVideo isOpen={isOpen} />} */}
      </>
    );
  }
  
  export default ParentComponent;