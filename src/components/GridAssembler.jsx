import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the drop animation
const drop = keyframes`
  0% {
    transform: translateY(-50px); // Start the drop from -50px above the final position
    opacity: 0;
    visibility: hidden;
  }
  50% {
    visibility: visible;
    opacity: 0.5; // Adjust opacity mid-animation for smoother transition
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

// Create a styled div for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; // A single column to hold all rows
  grid-gap: 0; // No gap between rows
`;

// Create a styled div for each grid item
const GridItem = styled.div`
  width: 100%;
  overflow: hidden; // Hide the overflowing part of the image during animation
  opacity: 0; // Start with invisible images
  visibility: hidden; // Ensure images are not visible initially
  animation: ${drop} 1s ease forwards;
  animation-delay: ${props => props.delay}s;
`;

const GridAssembler = () => {
  const imagesCount = 77; // The number of image parts
  const images = [];

  for (let i = 1; i <= imagesCount; i++) {
    images.push(`/image1x${i}.png`); // Corrected filename pattern
  }

  return (
    <GridContainer>
      {images.map((src, index) => (
        <GridItem key={src} delay={index * 0.1}> 
          <img src={src} alt={`Project part ${index}`} style={{ width: '100%', display: 'block' }} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default GridAssembler;
