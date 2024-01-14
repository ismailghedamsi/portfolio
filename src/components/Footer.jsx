import React from 'react';
import linkIcon from '../assets/transparent_link.png';

const Footer = () => {
    const linkStyles = {
        marginRight: '10px',
        color: 'blue',
        textDecoration: 'underline',
        '@media (max-width: 600px)': {
            marginRight: '5px',
        },
    };

    const mainContentStyles = {
        flexGrow: 1,
    };

    const flexContainerStyles = {
        display: 'flex',
        alignItems: 'center',
    };

    const socialLinkStyles = {
        fontSize: '16px',
        color: '#333',
        display: "flex",
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
        backgroundColor: '#f2f2f2', // light grey
        width: '100%',
        display: 'flex', // Add this line
        justifyContent: 'center', // Add this line
    };
        
    // add any other styles you want


    return (
        <footer  style={footerStyles}>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Ismail Ghedamsi</p>
                <div className="social-links">
                    <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                    <div style={flexContainerStyles}>
                        <img src={linkIcon} alt="Linkedin" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
                        <span style={socialLinkStyles}>Linkedin</span>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                    <div style={flexContainerStyles}>
                        <img src={linkIcon} alt="Github" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
                        <span style={socialLinkStyles}>Github</span>
                    </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
