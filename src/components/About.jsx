import { motion } from 'framer-motion';
import myImage from '../assets/futuristicdeveloper.webp';
import {styled, css} from 'styled-components';
import { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const gradientAnimation = css`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  -webkit-background-clip: text;
  color: transparent;
`;


const AnimatedTitle = styled.h1`
  ${gradientAnimation}
  font-size: 2em;
`;

const AnimatedSpan = styled.span`
  ${gradientAnimation}
`;

const AboutMe = () => {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
      }}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={myImage}
        alt="Me"
        style={{ width: '200px', borderRadius: '50%' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <AnimatedTitle>Hello, I'm Ismail Ghedamsi</AnimatedTitle>
      <p style={{ color: '#666', fontSize: '1.2em', textAlign: 'justify', maxWidth: '800px' }}>
        As an <AnimatedSpan>enthusiastic programmer</AnimatedSpan>, I thrive on the pulse of <AnimatedSpan>cutting-edge technologies</AnimatedSpan>. My journey in the realm of coding is not just a profession; it's a <AnimatedSpan>passion</AnimatedSpan>. I find joy in exploring the ever-evolving landscape of programming languages, frameworks, and tools.
      </p>
      <p style={{ color: '#666', fontSize: '1.2em', textAlign: 'justify', maxWidth: '800px' }}>
        My coding journey is deeply rooted in the belief that the best way to master technology is to use it to solve <AnimatedSpan>real-world problems</AnimatedSpan>. I've always been driven by the idea of programming in the service of my own needs. Whether it's developing a tool to streamline my workflow or creating an application that addresses a personal challenge, I approach coding as a means to  <AnimatedSpan>empower and enhance my own experiences.</AnimatedSpan>
      </p>
      <p style={{ color: '#666', fontSize: '1.2em', textAlign: 'justify', maxWidth: '800px' }}>
        Beyond self-service, I'm on a mission to leverage my skills for a broader <AnimatedSpan>impact on the real world</AnimatedSpan>. I believe in the transformative power of technology to bring about positive change. With each line of code, I aim to contribute to solutions that make a meaningful difference.
      </p>
    </motion.div>
  );
};

export default AboutMe;