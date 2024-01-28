// Project.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';



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
const Project = ({ title, description, images, fullImage, style }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });



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
    <animated.div style={fadeIn}>
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