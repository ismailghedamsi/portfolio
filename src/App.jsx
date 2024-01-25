import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';



function App() {

  const projects = [
    {
      title: "Upcoming Rap Calendar",
      description: "A platform dedicated to providing information on upcoming releases in the hip-hop music genre. It includes release dates and details for new albums,",
      imagesCount: 77,
      imageBaseName: "project1/image1x",
      fullImage: "project1/project1completeimage.jpg"
    },
    {
      title: "Music Player",
      description: "A basic music player for windows 10 with drag and drop support for files and folders.",
      imagesCount: 150,
      imageBaseName: "project2/image1x",
      fullImage: "project2/musicplayer.jpg"
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flexGrow: 1 }}>
        <p>hello</p>
        <AboutMe />
        <div>
      {projects.map(({ title, description, fullImage, imageBaseName, imagesCount }, index) => (
        <Project 
          key={index}
          title={title}
          description={description}
          fullImage={fullImage}
          images={Array.from({ length: imagesCount }, (_, i) => `/${imageBaseName}${i+1}.jpg`)}
        />
      ))}
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
