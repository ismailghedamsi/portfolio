import './App.css';
import Footer from './components/Footer';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flexGrow: 1 }}>
        <p>hello</p>
        {/* other content */}
      </div>
      <Footer />
    </div>
  )
}

export default App
