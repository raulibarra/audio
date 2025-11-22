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
    <div id="page-top">
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      <Footer />

      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-to-top d-lg-none position-fixed" onClick={scrollToTop}>
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
}

export default App;
