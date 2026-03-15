import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaItchIo, FaCode, FaVolumeUp } from 'react-icons/fa';
import TechStack from './TechStack';
import HybridProfile from './HybridProfile';

const About = () => {
    return (
        <section className="page-section bg-premium-gradient text-white mb-0" id="about">
            <div className="container">
                {/* About Section Content */}
                <Row>
                    <Col lg={4} className="ml-auto">
                        <img className="img-fluid profile-image" src="./assets/img/FotoPromoRaul-min.JPG" style={{ width: '300px' }} alt="Raul Ibarra Aranda" />
                        <hr style={{ backgroundColor: 'aliceblue' }} />
                        <div style={{ paddingTop: '1vh' }}>
                            <h5>Quick Contact Info:</h5>
                            <p>
                                <a className="projects-link" href="mailto:raulibarra.a@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">
                                    <FaEnvelope style={{ color: 'aliceblue', paddingRight: '5px' }} />raulibarra.a@gmail.com
                                </a><br />
                                <a className="projects-link" href="https://www.linkedin.com/in/raulxibarra" target="_blank" rel="noopener noreferrer" alt="LinkedIn">
                                    <FaLinkedin style={{ color: 'aliceblue', paddingRight: '5px' }} />LinkedIn
                                </a><br />
                                <a className="projects-link" href="https://gamingsoft.itch.io/" target="_blank" rel="noopener noreferrer" alt="Personal Projects">
                                    <FaItchIo style={{ color: 'aliceblue', paddingRight: '5px' }} />Personal projects
                                </a><br />
                                <a className="projects-link" href="https://raulibarra.github.io/music" target="_blank" rel="noopener noreferrer" alt="Music Portfolio">
                                    <FaVolumeUp style={{ color: 'aliceblue', paddingRight: '5px' }} />Music Composer Portfolio!
                                </a><br />
                                <a className="projects-link" href="https://raulibarra.github.io" target="_blank" rel="noopener noreferrer" alt="Game Dev Portfolio">
                                    <FaCode style={{ color: 'aliceblue', paddingRight: '5px' }} />Game Dev Portfolio!
                                </a>
                            </p>
                        </div>
                    </Col>
                    <Col lg={8} className="mr-auto" style={{ textAlign: 'justify' }}>
                        <h3 style={{ marginBottom: '1rem' }}>
                            Technical Sound Designer
                            <span style={{ color: 'var(--accent-primary)', display: 'block', fontSize: '1rem', fontWeight: 400, letterSpacing: '0.05em', marginTop: '0.2rem', opacity: 0.85 }}>
                                & Audio Programmer
                            </span>
                        </h3>

                        <p>With experience at leading AA studios including <strong>Somatone Interactive</strong> and <strong>Globant</strong>, I've shipped audio for licensed titles such as <em>Power Rangers™ Morphin Legends</em>, <em>Marvel World of Heroes</em>, and official <em>Dolby Atmos</em> gaming demos. My work spans interactive music systems, dynamic audio managers, immersive spatial soundscapes, and adaptive music composition across mobile, multiplayer, VR, and WebGL platforms.</p>

                        <p>I program the systems I design. From custom C# audio managers and Wwise/FMOD integrations to MetaSound C++ nodes and raycasting-based footstep systems, my implementation is production-quality and optimized for performance. Currently deepening that expertise with a <strong>Master's in Music Composition for Video Games</strong>.</p>

                        <div style={{ marginTop: '1.5rem', padding: '0.75rem', backgroundColor: 'rgba(60, 65, 121, 0.15)', borderLeft: '3px solid #3c4179' }}>
                            <strong>Open to opportunities:</strong> Technical Sound Designer, Audio Programmer, and Game Developer roles at AA/AAA studios and emerging technology projects.
                            Let's connect at <a href="mailto:raulibarra.a@gmail.com" style={{ color: '#5a6fd8' }}>raulibarra.a@gmail.com</a>
                        </div>
                    </Col>
                </Row>

                {/* Hybrid Profile Section */}
                <HybridProfile />

                {/* Main Skills Section */}
                <div id="mainSkills">
                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default About;
