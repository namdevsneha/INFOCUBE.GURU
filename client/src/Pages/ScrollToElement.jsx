import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the DOM to load and then scroll to the element
      const scrollTimeout = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0); // delay to ensure DOM is ready

      return () => clearTimeout(scrollTimeout);
    }
  }, [hash]);

  return null;
};

export default ScrollToElement;


