import React from 'react';
import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import './components/translations/i18Initializer';
import { useScrollToTop } from './hooks/useScrollToTop';
import ProjectList from './components/ProjectList';
import technologies from './data/technologies';
import projects from './data/projects';
import { AppContainer, BackToTopButtonStyled, ContentContainer } from './App.styled';
import { useTranslation } from 'react-i18next';

function App() {
  const showBackToTop = useScrollToTop();
  const {t} = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppContainer>
      <Navbar />
      <BackToTopButtonStyled onClick={scrollToTop} show={showBackToTop}>
        {t('top')}
      </BackToTopButtonStyled>
      <ContentContainer>
        <AboutMe />
        <ProjectList projects={projects} technologies={technologies} />
        <ContactForm />
      </ContentContainer>
      <Footer />
    </AppContainer>

  );
}

export default App;
