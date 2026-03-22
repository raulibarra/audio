import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SineWave from './SineWave';
import audioSynth from '../utils/ProceduralAudio';

const Header = () => {
    const texts = [
        "Technical Sound Designer",
        "Audio Programmer",
        "Game Audio Developer",
        "Interactive Audio Specialist",
        "Technical Music Composer",
    ];
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    // Animation states
    const [isOverlayActive, setIsOverlayActive] = useState(!window.location.hash);
    const [isOpen, setIsOpen] = useState(false);
    const [lockDuration, setLockDuration] = useState(0.5);
    const [doorDuration, setDoorDuration] = useState(0.8);
    const [lockRotation, setLockRotation] = useState(0);
    const [lockScale, setLockScale] = useState(1);
    const [started, setStarted] = useState(false);

    const handleStart = async () => {
        if (started) return;
        setStarted(true);

        // Ensure we're at the top of the page if no hash
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }

        // Initialize Audio Context immediately on user gesture
        await audioSynth.init();
        try { await audioSynth.playSound("click"); } catch (e) { console.warn(e); }

        // Phase 1: Lock Turn
        try { await audioSynth.playLockSequence(); } catch (e) { console.warn(e); }
        setLockRotation(180);

        // Wait for lock animation
        await new Promise(r => setTimeout(r, lockDuration * 1000));

        // Phase 2: Unlock and Open
        try { await audioSynth.playDoorOpen(); } catch (e) { console.warn(e); }
        setLockScale(0);
        setIsOpen(true);
    };

    useEffect(() => {
        const initAudio = async () => {
            await audioSynth.init();
            setLockDuration(0.5);
            setDoorDuration(0.8);
        };
        initAudio();

        // Skip animation if a hash is already present or added
        const checkHash = () => {
            if (window.location.hash) {
                setIsOverlayActive(false); // Correctly hide the overlay entirely
                setStarted(true);
                setIsOpen(true);
                setLockScale(0);
            }
        };
        
        checkHash(); // Run on mount
        window.addEventListener('hashchange', checkHash);

        // Text rotation logic
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setOpacity(1);
            }, 500);
        }, 3000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('hashchange', checkHash);
        };
    }, [texts.length]);


    const doorStyle = {
        position: 'relative',
        width: '50%',
        height: '100%',
        backgroundColor: '#050505',
        backgroundImage: `
            repeating-linear-gradient(90deg, transparent 0, transparent 1px, rgba(0, 243, 255, 0.03) 1px, rgba(0, 243, 255, 0.03) 3px),
            repeating-linear-gradient(0deg, transparent 0, transparent 1px, rgba(0, 243, 255, 0.03) 1px, rgba(0, 243, 255, 0.03) 3px),
            radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(5,5,5,1) 100%)
        `,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <>
            {/* Doors Overlay - Only rendered if no deep link is present */}
            {isOverlayActive && (
                <div
                    onClick={handleStart}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        zIndex: 9998,
                        pointerEvents: isOpen ? 'none' : 'auto',
                        cursor: started ? 'default' : 'pointer',
                        display: 'flex',
                        perspective: '1000px',
                        opacity: isOpen ? 0 : 1,
                        transition: `opacity ${doorDuration}s ease ${doorDuration / 2}s`
                    }}>
                    
                    {/* Lock Mechanism */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) scale(${lockScale}) rotate(${lockRotation}deg)`,
                        width: '300px',
                        height: '300px',
                        zIndex: 10,
                        transition: `transform ${lockDuration}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            position: 'absolute',
                            bottom: '-60px',
                            color: 'rgba(0, 243, 255, 0.8)',
                            fontFamily: 'monospace',
                            letterSpacing: '2px',
                            fontSize: '0.9rem',
                            opacity: started ? 0 : 1,
                            transition: 'opacity 0.3s',
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            width: '100vw'
                        }}>
                            SYSTEM STANDBY // CLICK TO INITIALIZE
                        </div>

                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '2px solid rgba(0, 243, 255, 0.3)',
                            borderTopColor: 'rgba(0, 243, 255, 0.8)',
                            borderBottomColor: 'rgba(0, 243, 255, 0.8)',
                            animation: started ? 'none' : 'spin-slow 20s linear infinite'
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            width: '70%',
                            height: '70%',
                            borderRadius: '50%',
                            border: '4px dashed rgba(0, 243, 255, 0.5)',
                            transition: 'transform 0.8s ease',
                            animation: started ? 'none' : 'spin-reverse-slow 15s linear infinite'
                        }}></div>

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
                        transition: `transform ${doorDuration}s cubic-bezier(0.7, 0, 0.84, 0)`,
                        borderRight: '2px solid rgba(0, 243, 255, 0.5)',
                    }}></div>

                    {/* Right Door */}
                    <div style={{
                        ...doorStyle,
                        transform: isOpen ? 'translateX(100%) rotateY(15deg)' : 'translateX(0) rotateY(0deg)',
                        transition: `transform ${doorDuration}s cubic-bezier(0.7, 0, 0.84, 0)`,
                        borderLeft: '2px solid rgba(0, 243, 255, 0.5)',
                    }}></div>
                </div>
            )}

            <header className="hero-section d-flex align-items-center" style={{
                minHeight: '100vh',
                background: 'radial-gradient(circle at center, #1a1a2e 0%, #050505 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <SineWave />
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
                                <a href="#games-portfolio" className="btn-premium text-decoration-none">View Portfolio</a>
                                <a href="https://www.linkedin.com/in/raulxibarra" target="_blank" rel="noopener noreferrer" className="btn-premium text-decoration-none" style={{ borderColor: '#0077b5', color: '#fff', backgroundColor: 'rgba(0, 119, 181, 0.2)' }}>Connect on LinkedIn</a>
                                <a href="#contact" className="btn-premium text-decoration-none" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>Contact Me</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to bottom, transparent, #050505)', zIndex: 3, pointerEvents: 'none' }}></div>
            </header>
        </>
    );
};

export default Header;
