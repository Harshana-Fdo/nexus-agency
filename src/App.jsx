
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'  
import Work from './components/Work'
import Cursor from './components/Cursor'
import ScrollWrapper from './components/ScrollWrapper';
import Footer from './components/Footer';

function App() {
  return (
    <>
      
      <Cursor />
      
      
      <Navbar />

      <ScrollWrapper>
      
        <Hero />
        <Intro />
        <Work />
        <Services />
        
        
        <Footer />  
      </ScrollWrapper>
    </>
  )
}

export default App