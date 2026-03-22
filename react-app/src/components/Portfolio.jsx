import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar, FaGamepad, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import PortfolioItem from './PortfolioItem';
import { gamesData, personalData } from '../data/portfolioData';
import { scroller } from 'react-scroll';
import ProceduralAudio from '../utils/ProceduralAudio';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('games-portfolio');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) return;

            // Handle category-level deep links
            if (hash === 'games' || hash === 'technical') {
                const targetTab = hash === 'games' ? 'games-portfolio' : 'projects-portfolio';
                if (activeTab !== targetTab) {
                    setActiveTab(targetTab);
                }
                
                // For category switches, we scroll to the top of the portfolio section
                scroller.scrollTo('portfolio', {
                    duration: 800,
                    smooth: 'easeInOutQuart',
                    offset: -70
                });
                return;
            }

            const isGame = gamesData.some(p => p.id === hash);
            const isPersonal = personalData.some(p => p.id === hash);
            
            const targetTab = isGame ? 'games-portfolio' : (isPersonal ? 'projects-portfolio' : null);
            if (!targetTab) return;

            // If we need to switch tabs, do it first
            if (activeTab !== targetTab) {
                setActiveTab(targetTab);
            }

            // Small delay to allow category switch if needed
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (!element) return;
                
                const rect = element.getBoundingClientRect();
                const currentY = window.scrollY;
                const targetY = rect.top + currentY;
                const distance = Math.abs(currentY - targetY + 80);

                if (distance < 30) return;

                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, activeTab !== targetTab ? 150 : 10);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Initial check on mount
        if (window.location.hash) {
            handleHashChange();
        }

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [activeTab]); // React to activeTab changes to keep closures fresh

    const toggleTab = (tab) => {
        ProceduralAudio.playClick();
        const newHash = tab === 'games-portfolio' ? '#games' : '#technical';
        window.history.pushState(null, null, newHash);
        window.dispatchEvent(new Event('hashchange'));
    };

    return (
        <section className="page-section bg-indigo portfolio text-white" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading */}
                <div className="text-center">
                    <h2 className="page-section-heading mb-0 d-inline-block">
                        {activeTab === 'games-portfolio' ? 'Featured Game Projects' : 'Technical Showcases'}
                    </h2>
                    <p style={{ paddingTop: '10px' }}>
                        <i>
                            {activeTab === 'games-portfolio'
                                ? "Here's a selection of professional projects where I contributed to technical sound design, audio programming and music composition for games and interactive media."
                                : "Technical demonstrations of sound design, audio programming, music composition, including middleware integration, and interactive music implementation."}
                        </i>
                    </p>
                </div>
                {/* Icon Divider Removed */}

                {/* Portfolio Items */}
                {activeTab === 'games-portfolio' && (
                    <div id="games-portfolio" className="toggle-div visible">
                        {gamesData.map(project => (
                            <PortfolioItem key={project.id} id={project.id} {...project} />
                        ))}
                        <div className="text-center" style={{ paddingTop: '3vh' }}>
                            <h3>
                                <FaGamepad /> Check out my featured <span className="projects-link js-scroll-trigger" onClick={() => toggleTab('projects-portfolio')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Personal Projects</span>
                            </h3>
                        </div>
                    </div>
                )}

                {activeTab === 'projects-portfolio' && (
                    <div id="projects-portfolio" className="toggle-div visible">
                        {personalData.map(project => (
                            <PortfolioItem key={project.id} id={project.id} {...project} />
                        ))}
                        <div className="text-center">
                            <h4>
                                <FaArrowRight aria-hidden="true" /> Check out all of my personal projects on
                                <a href="https://gamingsoft.itch.io" rel="noopener noreferrer" className="projects-link" aria-label="Check out all of my personal projects on Itch.io" style={{ marginLeft: '5px' }}>
                                    <strong>Itch.io</strong>
                                </a>
                            </h4>
                        </div>
                        <div className="text-center">
                            <h3>
                                <FaArrowLeft /> Go back to <span className="projects-link js-scroll-trigger" onClick={() => toggleTab('games-portfolio')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Featured Projects</span>
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
