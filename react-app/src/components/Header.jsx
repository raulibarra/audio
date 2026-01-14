import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SineWave from './SineWave';

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
    const [isOpen, setIsOpen] = useState(false);
    const [duration, setDuration] = useState(2.5);
    const [lockRotation, setLockRotation] = useState(0);
    const [lockScale, setLockScale] = useState(1);

    // Audio helper
    const playAudio = (path) => {
        try {
            const audio = new Audio(path);
            audio.volume = 0.5;
            audio.play().catch(e => console.log("Audio play failed (autoplay policy):", e));
        } catch (e) {
            console.error("Audio error:", e);
        }
    };

    useEffect(() => {
        const calculateDuration = () => {
            // Distance = half the width. Speed approx 500px/s seems good.
            const width = window.innerWidth / 2;
            const speed = 500;
            const calculated = width / speed;
            setDuration(Math.max(0.5, calculated));
        };

        calculateDuration();
        window.addEventListener('resize', calculateDuration);
        return () => window.removeEventListener('resize', calculateDuration);
    }, []);

    useEffect(() => {
        // Text roatation logic
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setOpacity(1);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Animation Sequence
        const sequence = async () => {
            // Initial delay
            await new Promise(r => setTimeout(r, 800));

            // Phase 1: Lock Turn
            // Only play audio if interaction occured? Chrome might block.
            // We'll try anyway.
            playAudio('/sounds/lock.mp3');
            setLockRotation(180); // Spin 180 degrees

            // Wait for spin duration
            await new Promise(r => setTimeout(r, 800));

            // Phase 2: Unlock and Open
            playAudio('/sounds/door_open.mp3');
            setLockScale(0); // Shrink lock
            setIsOpen(true); // Open doors
        };

        sequence();
    }, []);

    const doorStyle = {
        position: 'relative',
        width: '50%',
        height: '100%',
        backgroundColor: '#050505',
        backgroundImage: `
            repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 1px,
                rgba(0, 243, 255, 0.03) 1px,
                rgba(0, 243, 255, 0.03) 3px
            ),
            repeating-linear-gradient(
                0deg,
                transparent 0,
                transparent 1px,
                rgba(0, 243, 255, 0.03) 1px,
                rgba(0, 243, 255, 0.03) 3px
            ),
            radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(5,5,5,1) 100%)
        `,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <>
            {/* Doors Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 9998,
                pointerEvents: 'none',
                display: 'flex',
                perspective: '1000px'
            }}>
                {/* Lock Mechanism - Centered */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${lockScale}) rotate(${lockRotation}deg)`,
                    width: '300px',
                    height: '300px',
                    zIndex: 10,
                    transition: 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), width 0.3s, height 0.3s', // Bouncy spin, smooth scale
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Outer Ring */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px solid rgba(0, 243, 255, 0.3)',
                        borderTopColor: 'rgba(0, 243, 255, 0.8)',
                        borderBottomColor: 'rgba(0, 243, 255, 0.8)',
                        animation: 'none' // Controlled by parent rotation
                    }}></div>

                    {/* Inner Ring */}
                    <div style={{
                        position: 'absolute',
                        width: '70%',
                        height: '70%',
                        borderRadius: '50%',
                        border: '4px dashed rgba(0, 243, 255, 0.5)',
                        transform: `rotate(-${lockRotation * 2}deg)`, // Counter-rotate relative to parent
                        transition: 'transform 0.8s ease'
                    }}></div>

                    {/* Center Core */}
                    <div style={{
                        position: 'absolute',
                        width: '20%',
                        height: '20%',
                        borderRadius: '50%',
                        background: 'rgba(0, 243, 255, 0.8)',
                        boxShadow: '0 0 20px rgba(0, 243, 255, 0.8)'
                    }}></div>
                </div>

                {/* Left Door */}
                <div style={{
                    ...doorStyle,
                    transform: isOpen ? 'translateX(-100%) rotateY(-15deg)' : 'translateX(0) rotateY(0deg)',
                    transition: `transform ${duration}s cubic-bezier(0.19, 1, 0.22, 1)`,
                    borderRight: '2px solid rgba(0, 243, 255, 0.5)',
                    boxShadow: 'inset -10px 0 50px rgba(0,0,0,0.8)',
                    justifyContent: 'flex-end',
                }}>
                    {/* Decorative Panel Lines */}
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        bottom: '10%',
                        right: '50px',
                        width: '2px',
                        background: 'rgba(0, 243, 255, 0.2)'
                    }}></div>
                </div>

                {/* Right Door */}
                <div style={{
                    ...doorStyle,
                    transform: isOpen ? 'translateX(100%) rotateY(15deg)' : 'translateX(0) rotateY(0deg)',
                    transition: `transform ${duration}s cubic-bezier(0.19, 1, 0.22, 1)`,
                    borderLeft: '2px solid rgba(0, 243, 255, 0.5)',
                    boxShadow: 'inset 10px 0 50px rgba(0,0,0,0.8)',
                    justifyContent: 'flex-start'
                }}>
                    {/* Decorative Panel Lines */}
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        bottom: '10%',
                        left: '50px',
                        width: '2px',
                        background: 'rgba(0, 243, 255, 0.2)'
                    }}></div>
                </div>
            </div>


            <header className="hero-section d-flex align-items-center" style={{
                minHeight: '100vh',
                background: 'radial-gradient(circle at center, #1a1a2e 0%, #050505 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <SineWave />

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

                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <a href="#games-portfolio" className="btn-premium text-decoration-none">
                                    View Portfolio
                                </a>
                                <a href="https://www.linkedin.com/in/raulxibarra" target="_blank" rel="noopener noreferrer" className="btn-premium text-decoration-none" style={{ borderColor: '#0077b5', color: '#fff', backgroundColor: 'rgba(0, 119, 181, 0.2)' }}>
                                    Connect on LinkedIn
                                </a>
                                <a href="#contact" className="btn-premium text-decoration-none" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                                    Contact Me
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
