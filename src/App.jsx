import './App.css';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flexGrow: 1 }}>
        <p>hello</p>
        <AboutMe />
        <Projects/>
      </div>
      <Footer />
    </div>
  )
}

export default App
