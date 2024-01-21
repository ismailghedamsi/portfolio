import './App.css';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';



function App() {

  const projects = [
    {
      title: "Upcomingrapcalendar",
      description: "A platform dedicated to providing information on upcoming releases in the hip-hop music genre. It includes release dates and details for new albums,",
      imagesCount: 77,
      imageBaseName: "project1/image1x"
    },
    {
      title: "Project 2",
      description: "Short description of Project 2",
      imagesCount: 77,
      imageBaseName: "project1/image1x"
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flexGrow: 1 }}>
        <p>hello</p>
        <AboutMe />
        {/* <ProjectGrid/> */}
        <div>
      {projects.map((project, index) => (
        <Project 
          key={index}
          title={project.title}
          description={project.description}
          images={Array.from({ length: project.imagesCount }, (_, i) => `/${project.imageBaseName}${i+1}.jpg`)}
        />
      ))}
    </div>
        {/* <GridAssembler/> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
