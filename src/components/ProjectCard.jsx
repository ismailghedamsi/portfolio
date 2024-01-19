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
  background-color: #fff; /* White background */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */

  /* Typography */
  h2 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }

  /* Image styling */
  img {
    width: 150px;
    height: 150px;
    object-fit: cover; /* Ensure image covers the entire area */
    border-radius: 50%; /* Circular image */
    margin-bottom: 15px;
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