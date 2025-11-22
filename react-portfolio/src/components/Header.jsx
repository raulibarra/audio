import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParticleBackground from './ParticleBackground';

const Header = () => {
    const texts = [
        "Technical Sound Designer",
        "Audio Programmer",
        "Technical Music Composer",
        "Game Audio Developer",
        "Interactive Audio Specialist",
    ];
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setOpacity(1);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hero-section d-flex align-items-center" style={{
            minHeight: '100vh',
            background: 'radial-gradient(circle at center, #1a1a2e 0%, #050505 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <ParticleBackground />

            {/* Abstract Background Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(0, 243, 255, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>

            <Container className="text-center position-relative" style={{ zIndex: 2 }}>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h1 className="display-1 fw-bold mb-4" style={{
                            fontFamily: 'var(--font-heading)',
                            background: 'linear-gradient(to right, #fff, #a0a0a0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}>
                            RAÚL IBARRA ARANDA
                        </h1>

                        <div className="h3 mb-5" style={{ minHeight: '2em' }}>
                            <span style={{
                                color: 'var(--accent-primary)',
                                opacity: opacity,
                                transition: 'opacity 0.5s ease-in-out',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontSize: '1.5rem'
                            }}>
                                {texts[index]}
                            </span>
                        </div>

                        <div className="d-flex justify-content-center gap-3">
                            <a href="#games-portfolio" className="btn-premium text-decoration-none">
                                View Portfolio
                            </a>
                            <a href="#contact" className="btn-premium text-decoration-none" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                                Contact Me
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
