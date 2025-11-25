import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

function App() {
  console.log('Rendering App component');
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div id="page-top" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navigation />
      <Header />

      <main className="container-fluid px-0">
        <About />
        <Portfolio />
      </main>

      <Footer />

      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-to-top d-lg-none position-fixed" onClick={scrollToTop} style={{ bottom: '20px', right: '20px', zIndex: 1000 }}>
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top" style={{ background: 'var(--accent-primary)', width: '50px', height: '50px', lineHeight: '50px' }}>
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
}

export default App;
