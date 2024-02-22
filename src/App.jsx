import React from 'react';
import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import './components/translations/i18Initializer';
import BackToTopButton from './components/BackToTopButton';
import { useScrollToTop } from './hooks/useScrollToTop';
import ProjectList from './components/ProjectList';
import technologies from './data/technologies';
import projects from './data/projects';

function App() {
  const showBackToTop = useScrollToTop();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f5f5f5', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <BackToTopButton onClick={scrollToTop} style={{ display: showBackToTop ? 'block' : 'none' }}>
        Top
      </BackToTopButton>
      <div style={{ flexGrow: 1 }}>
        <AboutMe />
        <ProjectList projects={projects} technologies={technologies} />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
