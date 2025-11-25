import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaItchIo, FaCode, FaVolumeUp } from 'react-icons/fa';
import TechStack from './TechStack';

const About = () => {
    return (
        <section className="page-section bg-premium-gradient text-white mb-0" id="about">
            <div className="container">
                {/* About Section Content */}
                <Row>
                    <Col lg={4} className="ml-auto">
                        <img className="img-fluid profile-image" src="/assets/img/FotoPromoRaul-min.JPG" style={{ width: '300px' }} alt="Raul Ibarra Aranda" />
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
                        <h3>About Me</h3>
                        <p><strong>Technical Sound Designer & Audio Programmer</strong> specializing in building scalable, high-performance audio systems for games. I bridge the gap between creative audio design and technical implementation, architecting custom audio solutions and integrating professional middleware (Wwise, FMOD, Dolby Atmos) for multiplayer, mobile, and VR platforms.</p>

                        <p>With extensive experience at leading AA studios including <strong>Somatone Interactive</strong> and <strong>Globant</strong>, I've delivered audio for licensed titles such as <em>Power Rangers™ Morphin Legends</em>, <em>Marvel World of Heroes</em>, and official <em>Dolby Atmos</em> showcase experiences. My work spans from programming interactive music systems and dynamic audio managers to designing immersive soundscapes and composing adaptive music.</p>

                        <p>I excel at <strong>end-to-end feature ownership</strong>, combining audio programming (C#, C++, Blueprints) with sound design expertise to eliminate dependencies and accelerate development. Whether working in Unity or Unreal Engine, building custom audio architectures from scratch or integrating professional middleware, I deliver solutions optimized for performance, scalability, and creative excellence.</p>

                        <p><strong>Currently pursuing:</strong> Master's in Music Composition for Video Games, deepening expertise in adaptive audio and interactive composition techniques.</p>

                        <div style={{ marginTop: '1.5rem', padding: '0.75rem', backgroundColor: 'rgba(60, 65, 121, 0.15)', borderLeft: '3px solid #3c4179' }}>
                            <strong>Open to opportunities:</strong> Technical Sound Designer, Audio Programmer, and Game Developer roles at AA/AAA studios, indie teams, and emerging technology projects.
                            Let's connect at <a href="mailto:raulibarra.a@gmail.com" style={{ color: '#5a6fd8' }}>raulibarra.a@gmail.com</a>
                        </div>
                    </Col>
                </Row>

                {/* Main Skills Section */}
                <div id="mainSkills">
                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default About;
