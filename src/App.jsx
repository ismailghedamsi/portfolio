import React from 'react';
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


function App() {

  const {t} = useTranslation()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t('projects.project1.description'),
      imagesCount: 77,
      imageBaseName: "project1/image1x",
      fullImage: "project1/project1completeimage.jpg"
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      imagesCount: 150,
      imageBaseName: "project2/image1x",
      fullImage: "project2/musicplayer.jpg"
    },
  ];

  return (
    <div style={{ display: 'flex',  backgroundColor: '#f5f5f5', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
        <div style={{ flexGrow: 1 }}>
        <AboutMe />
        <div>
          <FireLine />
      {projects.map(({ title, description, fullImage, imageBaseName, imagesCount }, index) => (
          <React.Fragment key={index}>
        <Project 
          key={index}
          style={{ delay: index * 100 }}
          title={title}
          description={description}
          fullImage={fullImage}
          images={Array.from({ length: imagesCount }, (_, i) => `/${imageBaseName}${i+1}.jpg`)}
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
