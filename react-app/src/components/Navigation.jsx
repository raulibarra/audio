import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import ProceduralAudio from '../utils/ProceduralAudio';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            className={`text-uppercase ${scrolled ? 'glass-panel py-2' : 'py-4'}`}
            style={{
                transition: 'all 0.3s ease',
                backgroundColor: (scrolled || expanded) ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
                borderBottom: (scrolled || expanded) ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}
            id="mainNav"
        >
            <div className="container">
                <Navbar.Brand
                    as={Link}
                    to="page-top"
                    smooth={true}
                    duration={1000}
                    className="js-scroll-trigger fw-bold"
                    style={{
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.05em'
                    }}
                    onClick={() => {
                        ProceduralAudio.playClick();
                        setExpanded(false);
                    }}
                >
                    Game Audio Portfolio
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbarResponsive"
                    className="navbar-toggler-right font-weight-bold text-white rounded"
                    style={{ background: 'var(--accent-primary)', border: 'none' }}
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                >
                    <FaBars />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ms-auto navbar-nav">
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                to="about"
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
                                onClick={() => {
                                    ProceduralAudio.playClick();
                                    window.history.pushState(null, null, '#about');
                                    window.dispatchEvent(new Event('hashchange'));
                                    setExpanded(false);
                                }}
                                href="#about"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                to="portfolio"
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
                                onClick={() => {
                                    ProceduralAudio.playClick();
                                    window.history.pushState(null, null, '#games');
                                    window.dispatchEvent(new Event('hashchange'));
                                    setExpanded(false);
                                }}
                                href="#games"
                            >
                                FEATURED PROJECTS
                            </Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                to="portfolio"
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
                                onClick={() => {
                                    ProceduralAudio.playClick();
                                    window.history.pushState(null, null, '#technical');
                                    window.dispatchEvent(new Event('hashchange'));
                                    setExpanded(false);
                                }}
                                href="#technical"
                            >
                                TECHNICAL SHOWCASES
                            </Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                to="contact"
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}
                                onClick={() => {
                                    ProceduralAudio.playClick();
                                    window.history.pushState(null, null, '#contact');
                                    window.dispatchEvent(new Event('hashchange'));
                                    setExpanded(false);
                                }}
                                href="#contact"
                            >
                                CONTACT
                            </Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar >
    );
};

export default Navigation;
