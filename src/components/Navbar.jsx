import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import futuristicdeveloper from '../assets/futuristicdeveloper.webp'; // adjust the path to match your file structure
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const ThreeDLink = styled(Nav.Link)`
  color: #fff; // Default color
  position: relative;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: translateZ(10px); // Enhanced 3D effect on hover
    text-shadow: 
      1px 1px 5px lightblue, // Deep blue shadow for 3D effect
      2px 2px 10px #00008b, // Adding depth
      3px 3px 15px #00008b, // Further depth
      4px 4px 20px #00008b; // Maximum depth
  }
`;

const CenteredNav = styled(Nav)`
  display: flex;
  justify-content: center;
  width: 100%;
`;


const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={futuristicdeveloper}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <CenteredNav>
          <ThreeDLink href="/resume.pdf" download>Download Resume</ThreeDLink>
          <ThreeDLink href="https://github.com/ismailghedamsi" target="_blank" rel="noopener noreferrer">GitHub</ThreeDLink>
          <ThreeDLink href="https://www.linkedin.com/in/ismail-ghedamsi-29997540/" target="_blank" rel="noopener noreferrer">LinkedIn</ThreeDLink>
        </CenteredNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;