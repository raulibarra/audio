import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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
            bg="secondary"
            fixed="top"
            className={`text-uppercase ${scrolled ? 'navbar-shrink' : ''}`}
            id="mainNav"
        >
            <div className="container">
                <Navbar.Brand as={Link} to="page-top" smooth={true} duration={1000} className="js-scroll-trigger" style={{ cursor: 'pointer' }}>
                    Game Audio Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-toggler-right font-weight-bold bg-primary text-white rounded">
                    Menu <FaBars />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ms-auto navbar-nav">
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer' }}
                                href="#about"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                activeClass="active"
                                to="games-portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.dispatchEvent(new CustomEvent('togglePortfolio', { detail: 'games-portfolio' }))}
                                href="#games-portfolio"
                            >
                                FEATURED PROJECTS
                            </Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                activeClass="active"
                                to="projects-portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.dispatchEvent(new CustomEvent('togglePortfolio', { detail: 'projects-portfolio' }))}
                                href="#projects-portfolio"
                            >
                                TECHNICAL SHOWCASES
                            </Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                style={{ cursor: 'pointer' }}
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
