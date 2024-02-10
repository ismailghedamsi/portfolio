// BackToTopButton.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled button component
const Button = styled.button`
  position: fixed;
  bottom: 20px;
  border-radius: 50%;
  right: 20px;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;

  // Only show the button when it should be visible
  ${({ show }) =>
    show &&
    `
    opacity: 1;
    visibility: visible;
  `}

  &:hover {
    background: #0056b3;
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        // Calculate 20% of the page content height
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const twentyPercentOfPageHeight = pageHeight * 0.2;
  
        // Show button when scrolled past 20% of the page content
        setShowButton(window.scrollY > twentyPercentOfPageHeight);
      };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop} show={showButton}>
      <img src="arrow.png" alt="Back to top" style={{ width : 50, height : 50}} />
    </Button>
  );
};

export default BackToTopButton;
