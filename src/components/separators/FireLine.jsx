import styled, { keyframes } from 'styled-components';

// Keyframes for the flame animation
const flameAnimation = keyframes`
  to {
    background-position: 200% center;
  }
`;

// Styled component for the fire line
const FireLine = styled.hr`
  border: none;
  height: 5px;
  width: 75%; // Set the width to 50%
  margin: 20px auto; // Center the line horizontally and add vertical margin
  background: linear-gradient(
    to right,
    transparent,
    #ff6a00, /* Orange */
    #ffdd00, /* Yellow */
    #ff6a00, /* Orange */
    transparent
  );
  background-size: 200% auto;
  animation: ${flameAnimation} 1s linear infinite;
`;

export default FireLine;
