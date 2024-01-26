import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const WaveLine = styled.hr`
  border: none;
  height: 5px;
  width: 50%; // Set the width to 50%
  margin: 20px auto; // Center the line horizontally and add vertical margin
  background: repeating-linear-gradient(
    -45deg,
    #ffdd00, /* Yellow color */
    #ffdd00 10px,
    #ff6a00 10px, /* Orange color */
    #ff6a00 20px
  );
  background-size: 200% 100%;
  animation: ${waveAnimation} 4s linear infinite;
`;

export default WaveLine;
