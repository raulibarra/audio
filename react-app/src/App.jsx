import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import { useEffect } from 'react';
import ProceduralAudio from './utils/ProceduralAudio';

function App() {
  console.log('Rendering App component');

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Traverse up to find if we clicked a button or interactive element
      let target = e.target;
      while (target && target !== document.body) {
        if (
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.getAttribute('role') === 'button' ||
          target.getAttribute('role') === 'link' ||
          target.type === 'submit' ||
          target.classList.contains('btn') // Common button class
        ) {
          ProceduralAudio.playClick();
          break;
        }
        target = target.parentElement;
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Always scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top" style={{ background: 'rgba(5, 5, 5, 0.8)', border: '1px solid var(--accent-primary)', width: '50px', height: '50px', lineHeight: '50px' }}>
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
}

export default App;
