import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import futuristicdeveloper from '../assets/futuristicdeveloper.webp'; // adjust the path to match your file structure
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const linkStyles = `
  display: inline-block;
  margin: 0 15px; // Adjust the value as needed for your design
  color: #fff;
  position: relative;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 0 15px; // Adjust the value as needed for your design

  &:hover {
    transform: translateZ(10px);
    text-shadow: 
      1px 1px 5px lightblue,
      2px 2px 10px #00008b,
      3px 3px 15px #00008b,
      4px 4px 20px #00008b;
  }
`;

const ThreeDLink = styled(Nav.Link)`
  ${linkStyles}
`;

const ThreeDAnchor = styled(Link).attrs({
  activeClass: 'active',
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500
})`
  ${linkStyles}
  text-decoration: none; // Add other styles specific to ThreeDAnchor if needed

  // Add any additional states or styles below
`;
const CenteredNav = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <ThreeDAnchor to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>{t("nav.about")}</ThreeDAnchor>
          <ThreeDAnchor to="projects" spy={true} smooth={true} offset={-70} duration={500}>{t("nav.projects")}</ThreeDAnchor>
          <ThreeDAnchor to="contact" spy={true} smooth={true} offset={-70} duration={500}>{t("nav.contact")}</ThreeDAnchor>
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