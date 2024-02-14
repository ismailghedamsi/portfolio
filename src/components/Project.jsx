// Project.js
import React, { useEffect, useState, useTransition } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import Tooltip from './ToolTip';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS for animations
import { ThreeDLink } from './styled_components/StyledLink';
import { useTranslation } from 'react-i18next';



Modal.setAppElement('#root');

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
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  color: white;

  /* Initial gradient background */
  background: linear-gradient(135deg, #6e8efb, #a777e3);

  /* Setup for gradient animation */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #ff8a00, #e52e71); /* New gradient for hover */
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  /* Ensure content is above the pseudo-element */
  > * {
    position: relative;
    z-index: 1;
  }
  
  &:hover:before {
    opacity: 1; /* Show the new gradient on hover */
  }
`;

const TechnologyLogos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; // Add some space between the project content and the logos
`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;
`;

const GridItem = styled.div`
  width: 100%;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  animation: ${drop} 1s ease forwards;
  animation-delay: ${props => props.delay}s;

  img {
    width: 100%;
    height: auto; // Adjust height to maintain aspect ratio
    object-fit: cover; // Adjust this as needed
    display: block;
  }
`;


// Project component
const Project = ({ title, description, images, fullImage, style, technologies, projectId, githubLink, websiteLink }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const {t} = useTranslation()


  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.src = selectedImage;
    }
  }, [selectedImage]);

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === 'Escape') setModalIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEsc);
    return () => window.removeEventListener('keydown', closeOnEsc);
  }, []);


  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 200, // You can adjust the delay for each project
  });

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }



  const CloseButton = ({ onClick }) => (
    <button onClick={onClick} style={{
      position: 'absolute', // Use absolute positioning
      top: '10px', // Adjust these as needed
      right: '10px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
    }}>
      <img src={"1.png"} alt="Close" style={{ width: '30px', height: '30px' }} />
    </button>
  );


  return (
    <animated.div id="projects" style={fadeIn}>
      <ProjectCard>
        <h2>{title}</h2>
        <p>{description}</p>
        <GridContainer>
          {images.map((src, index) => {
            return <GridItem key={src} delay={index * 0.055}>
              <img
                src={src}
                alt={`Project part ${index}`}
                style={{ width: '100%', display: 'block' }}
                onClick={() => {
                  setSelectedImage(fullImage);
                  setModalIsOpen(true);
                }}
              />
            </GridItem>
          })}
        </GridContainer>
        <TechnologyLogos>
          {Array.isArray(technologies) && technologies.map((techLogo, index) => {
            return <Tooltip text={techLogo.name}><img data-aos-duration="3000" data-aos="fade-right" key={index} src={techLogo.logoFilename} alt={`Technology ${index}`} style={{ width: '50px', height: '50px', margin: '5px' }} /></Tooltip>
          })}
        </TechnologyLogos>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {githubLink && (
          <ThreeDLink href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}>
            GitHub
          </ThreeDLink>
        )}
        {websiteLink && (
          <ThreeDLink href={websiteLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: 'white', textDecoration: 'none' }}>
            {t("projects.website")}
          </ThreeDLink>
        )}
      </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Image"
          ariaHideApp={false}
          style={{
            content: {
              width: imageDimensions.width,
              height: imageDimensions.height,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative', // Ensure this is set to 'relative'
            },
          }}
        >
          <CloseButton onClick={closeModal} />
          {selectedImage && <img src={selectedImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
        </Modal>
      </ProjectCard>
    </animated.div>
  );
};

export default Project;