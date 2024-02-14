import React, { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';
import FireLine from './components/separators/FireLine';
import WaveLine from './components/separators/WaveLine';
import ContactForm from './components/ContactForm';
import './components/translations/i18Initializer';
import { useTranslation } from 'react-i18next';
import BackToTopButton from './components/BackToTopButton';


function App() {

  const {t} = useTranslation()
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the page is scrolled past the screen height
      if (window.scrollY > window.innerHeight) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const projects = [
    {
      id : 0,
      title: t("projects.project1.title"),
      description: t('projects.project1.description'),
      imagesCount: 77,
      imageBaseName: "project1/image1x",
      fullImage: "project1/project1completeimage.jpg",
      githubLink:"https://github.com/ismailghedamsi/hiphopalbumreleasedates",
      websiteLink:"https:/www.upcomingrapcalendar.com"
    },
    {
      id : 1,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      imagesCount: 150,
      imageBaseName: "project2/image1x",
      fullImage: "project2/musicplayer.jpg",
      githubLink:"https://github.com/yourgithubprofile/yourprojectrepo"
    },
  ];

  const technologies = {
    0: [
      { name: 'React', image: 'react.png' },
      { name: 'Styled Components', image: 'styledcomponent.png' },
      { name: 'Supabase', image: 'supabase.png' }
    ],
    1: [
      { name: 'Universal Windows Platform', image: 'UWP.png' },
    ]
  };
  

  return (
    <div style={{ display: 'flex',  backgroundColor: '#f5f5f5', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <BackToTopButton onClick={scrollToTop} style={{ display: showBackToTop ? 'block' : 'none' }}>
        Top
      </BackToTopButton>
        <div style={{ flexGrow: 1 }}>
        <AboutMe />
        <div>
          <FireLine />
      {projects.map(({ id, title, description, imagesCount, imageBaseName, fullImage, githubLink, websiteLink}, index) => (
          <React.Fragment key={index}>
        <Project 
          key={id}
          projectId={id}
          style={{ delay: index * 100 }}
          title={title}
          description={description}
          fullImage={fullImage}
          githubLink={githubLink}
          websiteLink={websiteLink}
          images={Array.from({ length: imagesCount }, (_, i) => `/${imageBaseName}${i+1}.jpg`)}
          // Use the project's id to pass the correct array of technology logos
          technologies={(technologies[id] || []).map(tech => ({
            logoFilename: `/tech_logos/${tech.image}`,
            name: tech.name
          }))}
        />
        {index < projects.length - 1 && <WaveLine />}
      </React.Fragment>
      ))}
      <ContactForm />
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
