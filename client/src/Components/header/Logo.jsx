import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.webp';
import infocubeLogo from '../../Assets/Images/InfoCubeLogo.webp';
import Infocube from '../../Assets/Images/Infocube_black.webp'

export default function Logo() {
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {

    
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Change the threshold according to your needs
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const imageElement = imageRef.current;

    if ('loading' in HTMLImageElement.prototype) {
      imageElement.setAttribute('loading', 'lazy');
    } else {
      // Fallback for browsers that do not support the loading attribute
      const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            imageElement.setAttribute('src', imageElement.getAttribute('src'));
            observer.unobserve(imageElement);
          }
        });
      });
      lazyImageObserver.observe(imageElementElement);
    }
  }, []);

  const infocubelogo = isMobile?{height:`${22.496}px`}:{height:`${0.010714*innerWidth+19.428572}px`};
  const infocube = isMobile?{height:`${11.296}px`}:{height:`${0.00625*innerWidth+8}px`};
  return (
    <Link to='/' className=''>
        <div className='grid grid-cols-4 gap-[4.5px] md:gap-[6px] lg:gap-[8px] items-center'> 
        <img  className='col-span-1 w-auto  ' alt='Infocube Logo'
          loading='lazy'
 style={infocubelogo} src={infocubeLogo}/>
        <img ref={imageRef} className='col-span-3 w-auto   ' alt='Infocube'
          loading='lazy'  style={infocube} src={Infocube}/>
          </div>
    </Link>
  )
}

