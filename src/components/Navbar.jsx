import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import futuristicdeveloper from '../assets/futuristicdeveloper.webp'; // adjust the path to match your file structure
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

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

const StyledNavbar = styled(Navbar)`
background-color: #cadefc;
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LanguageDropdown = styled(Dropdown)`
  position: relative;
  &:hover > .dropdown-menu {
    display: block;
    animation: ${fadeIn} 0.5s ease-out;
  }
`;

const DropdownToggleStyled = styled(Dropdown.Toggle)`
  background-color: transparent;
  border: none;
  color: #fff; // Adjust as needed
  &:hover,
  &:focus {
    color: #fff; // Adjust as needed
    background-color: transparent;
  }
`;

const DropdownMenuStyled = styled(Dropdown.Menu)`
  background-color: #cadefc; // Adjust as needed
  border-radius: 10px;
  border: none;
`;


const MyNavbar = () => {
  const [language, setLanguage] = useState('FR');
  const {t} = useTranslation();
  return (
    <StyledNavbar expand="lg">
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
          <ThreeDLink href="/resume.pdf" download>{t("nav.resume")}</ThreeDLink>
          <ThreeDLink href="https://github.com/ismailghedamsi" target="_blank" rel="noopener noreferrer">GitHub</ThreeDLink>
          <ThreeDLink href="https://www.linkedin.com/in/ismail-ghedamsi-29997540/" target="_blank" rel="noopener noreferrer">LinkedIn</ThreeDLink>
          <LanguageDropdown>
            <DropdownToggleStyled id="dropdown-language-selector">
              {language}
            </DropdownToggleStyled>
            <DropdownMenuStyled>
              <Dropdown.Item onClick={() => { setLanguage('FR'); i18next.changeLanguage("fr") }}><ThreeDLink>FR</ThreeDLink></Dropdown.Item>
              <Dropdown.Item onClick={() => {setLanguage('EN');  i18next.changeLanguage("en")  }}><ThreeDLink>EN</ThreeDLink></Dropdown.Item>
            </DropdownMenuStyled>
          </LanguageDropdown>
        </CenteredNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default MyNavbar;