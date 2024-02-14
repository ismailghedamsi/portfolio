
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';


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

export {linkStyles, ThreeDLink}