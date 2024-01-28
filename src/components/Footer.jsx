import React from 'react';
import linkIcon from '../assets/transparent_link.png';
import styled from 'styled-components';


const ThreeDLink = styled.a`
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

const Footer = () => {
 
    const flexContainerStyles = {
        display: 'flex',
        alignItems: 'center',
    };

    const socialLinkStyles = {
        fontSize: '16px',
        color: '#212529',
        display: "flex",
        textDecoration: 'none',
        justifyContent: "space-around",
        '@media (max-width: 600px)': {
            flexDirection: 'row',
            fontSize: '12px',
        },
        '@media (max-width: 599px)': {
            flexDirection: 'column',
        },
        // add any other styles you want
    };

    const footerStyles = {
        backgroundColor: '#cadefc',
        color: '#212529',
        width: '100%',
        display: 'flex', // Add this line
        justifyContent: 'center', // Add this line
    };
        
   


    return (
        <footer  style={footerStyles}>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Ismail Ghedamsi</p>
                <div className="social-links">
                    <ThreeDLink href="https://www.linkedin.com/in/ismail-ghedamsi-29997540/" target="_blank" rel="noopener noreferrer">
                    <div style={flexContainerStyles}>
                        <img src={linkIcon} alt="Linkedin" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
                        <span style={socialLinkStyles}>Linkedin</span>
                    </div>
                    </ThreeDLink>
                    <ThreeDLink href="https://github.com/ismailghedamsi" target="_blank" rel="noopener noreferrer">
                    <div style={flexContainerStyles}>
                        <img src={linkIcon} alt="Github" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
                        <span style={socialLinkStyles}>Github</span>
                    </div>
                    </ThreeDLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
