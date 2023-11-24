import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  return (
    <div>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            padding: '10px',
            backgroundColor: 'rgb(72, 103, 195)',
            color: '#fff',
            borderRadius: '50%',
            zIndex: '999',
          }}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;
