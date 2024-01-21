// Project.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the drop animation
const drop = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
    visibility: hidden;
  }
  50% {
    visibility: visible;
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto; 
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  width: 100%; 
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;
`;

const GridItem = styled.div`
  width: 100%;
  max-width: 250px; // Maximum width of each grid item
  max-height: 150px; // Maximum height of each grid item
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  animation: ${drop} 1s ease forwards;
  animation-delay: ${props => props.delay}s;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; // Image will scale to fit the container
    display: block;
  }
`;

// Project component
const Project = ({ title, description, images }) => {
  return (
    <ProjectCard>
      <h2>{title}</h2>
      <p>{description}</p>
      <GridContainer>
        {images.map((src, index) => {
          console.log(src);
          return <GridItem key={src} delay={index * 0.1}>
            <img src={src} alt={`Project part ${index}`} style={{ width: '100%', display: 'block' }} />
          </GridItem>
        })}
      </GridContainer>
    </ProjectCard>
  );
};

export default Project;