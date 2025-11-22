import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    FaCode, FaCodeBranch, FaWaveSquare, FaUnity, FaUncharted,
    FaHeadphones, FaMusic, FaVrCardboard, FaSitemap,
    FaTachometerAlt, FaGamepad, FaJira, FaDatabase,
    FaLayerGroup, FaCube, FaSlidersH, FaMicrophone, FaGuitar, FaDrum, FaGlobe, FaMobileAlt, FaUsers, FaVolumeUp
} from 'react-icons/fa';

const TechStack = () => {
    return (
        <div className="tech-stack-section mt-5">
            <h3 className="text-center mb-5" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>TECHNICAL ARSENAL</h3>
            <Row>
                {/* Audio Programming */}
                <Col lg={3} md={6} className="mb-4">
                    <div className="glass-panel p-4 h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        transition: 'transform 0.3s ease'
                    }}>
                        <h5 className="mb-4" style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            Audio Programming
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaCode /></span> Custom Audio Managers
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaWaveSquare /></span> Interactive Music Systems
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaSlidersH /></span> Dynamic Audio Mixing
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaTachometerAlt /></span> Performance Optimization
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaDatabase /></span> Middleware Integration
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaLayerGroup /></span> Object Pooling
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaCube /></span> Addressables Integration
                            </li>
                        </ul>
                    </div>
                </Col>

                {/* Middleware & Tools */}
                <Col lg={3} md={6} className="mb-4">
                    <div className="glass-panel p-4 h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <h5 className="mb-4" style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            Middleware & Tools
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaUncharted /></span> Wwise / FMOD
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaUncharted /></span> Metasounds
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaHeadphones /></span> Dolby Atmos
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaWaveSquare /></span> Google Resonance Audio
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaUnity /></span> Unity
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}>
                                    <img src="/assets/img/icons8-unreal-engine.svg" width="20" alt="Unreal" />
                                </span> Unreal Engine
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaWaveSquare /></span> Pro Tools | Reaper
                            </li>
                        </ul>
                    </div>
                </Col>

                {/* Sound Design & Music */}
                <Col lg={3} md={6} className="mb-4">
                    <div className="glass-panel p-4 h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <h5 className="mb-4" style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            Sound Design & Music
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaVolumeUp /></span> Sound Design
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaMicrophone /></span> Field Recording
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaMusic /></span> Adaptive Music
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaHeadphones /></span> Spatial Audio (VR)
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaSlidersH /></span> Procedural Audio
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaGuitar /></span> Audio Implementation
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaMusic /></span> Music Composition
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaDrum /></span> Orchestration
                            </li>
                        </ul>
                    </div>
                </Col>

                {/* Development & Workflow */}
                <Col lg={3} md={6} className="mb-4">
                    <div className="glass-panel p-4 h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <h5 className="mb-4" style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                            Development & Workflow
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaCode /></span> C# | C++ | Python
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaGamepad /></span> Multiplayer Systems
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaMobileAlt /></span> Mobile Optimization
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaGlobe /></span> WebGL Optimization
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaVrCardboard /></span> VR Audio Implementation
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaCodeBranch /></span> Git | Perforce | SVN
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaJira /></span> Agile/Scrum
                            </li>
                            <li className="mb-3 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ marginRight: '10px', color: 'var(--text-primary)' }}><FaUsers /></span> Cross-functional Collab
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TechStack;
