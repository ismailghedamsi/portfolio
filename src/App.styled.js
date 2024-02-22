import styled from 'styled-components';
import BackToTopButton from './components/BackToTopButton';

const AppContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const BackToTopButtonStyled = styled(BackToTopButton)`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export { AppContainer, ContentContainer, BackToTopButtonStyled };