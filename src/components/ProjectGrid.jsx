import React from 'react';
import styled from 'styled-components';

// Styled grid container
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 columns
  grid-gap: 20px; // spacing between grid items
  padding: 20px; // padding around the grid
`;

// Styled individual grid item
const GridItem = styled.div`
  background-color: #f0f0f0; // background color of each item
  border-radius: 10px; // rounded corners
  padding: 20px; // padding inside each item
  text-align: center; // center the text
  transition: transform 0.3s ease-in-out; // smooth transform effect

  &:hover {
    transform: scale(1.05); // scale up item on hover
  }
`;

const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'url-to-project1-image.jpg',
      description: 'Short description of Project 1'
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'url-to-project2-image.jpg',
      description: 'Short description of Project 2'
    },
    // Add more projects as needed
  ];

const ProjectGrid = () => {
  return (
    <Grid>
      <GridItem>Project 1</GridItem>
      <GridItem>Project 2</GridItem>
      <GridItem>Project 3</GridItem>
      <GridItem>Project 4</GridItem>
    </Grid>
  );
}

export default ProjectGrid;
