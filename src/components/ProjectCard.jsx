import React from 'react';
import styled from 'styled-components';

function ProjectCard({ title, description, imageUrl }) {

  const ProjectCardContainer = styled.div`
  /* Basic layout and spacing */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  /* Gradient background */
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */

  /* Typography */
  h2 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff; /* Adjust text color for better visibility on the gradient */
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #ffffff; /* Adjust text color for better visibility on the gradient */
  }

  /* Image styling */
  img {
    width: 150px;
    height: 150px;
    object-fit: cover; /* Ensure image covers the entire area */
    border-radius: 50%; /* Circular image */
    margin-bottom: 15px;
    border: 4px solid #ffffff; /* Optional: add a white border around the image for better separation from the background */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    /* Adjust layout for smaller screens as needed */
  }
`;
  return (
    <ProjectCardContainer>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </ProjectCardContainer>
  );
}

export default ProjectCard;