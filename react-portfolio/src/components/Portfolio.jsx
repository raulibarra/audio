import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar, FaGamepad, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import PortfolioItem from './PortfolioItem';
import { gamesData, personalData } from '../data/portfolioData';
import { scroller } from 'react-scroll';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('games-portfolio');

    useEffect(() => {
        const handleToggle = (e) => {
            setActiveTab(e.detail);
            scroller.scrollTo('portfolio', {
                duration: 1000,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -70
            });
        };

        window.addEventListener('togglePortfolio', handleToggle);
        return () => {
            window.removeEventListener('togglePortfolio', handleToggle);
        };
    }, []);

    const toggleTab = (tab) => {
        setActiveTab(tab);
        scroller.scrollTo('portfolio', {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70
        });
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
                                ? "Here’s a selection of professional projects where I contributed to audio programming, music and sound design for games and interactive media."
                                : "Technical demonstrations of audio programming systems, middleware integration, and interactive music implementation."}
                        </i>
                    </p>
                </div>
                {/* Icon Divider */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FaStar /></div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* Portfolio Items */}
                {activeTab === 'games-portfolio' && (
                    <div id="games-portfolio" className="toggle-div visible">
                        {gamesData.map(project => (
                            <PortfolioItem key={project.id} {...project} />
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
                            <PortfolioItem key={project.id} {...project} />
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
