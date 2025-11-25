import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaItchIo, FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer text-center" id="contact">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <h2 className="page-section-heading text-white d-inline-block mb-0">You can get in touch with me on</h2>
                    </div>
                    <Row>
                        {/* Footer Social Icons */}
                        <Col>
                            <a className="btn btn-outline-dark btn-social mx-2" href="https://wa.link/zawmli" target="_blank" rel="noopener noreferrer" alt="Whatsapp">
                                <FaWhatsapp style={{ color: 'aliceblue', height: '80%' }} />
                            </a>
                            <a className="btn btn-outline-dark btn-social mx-2" href="mailto:raulibarra.a@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">
                                <FaEnvelope style={{ color: 'aliceblue', height: '80%' }} />
                            </a>
                            <a className="btn btn-outline-dark btn-social mx-2" href="https://www.linkedin.com/in/raulxibarra" target="_blank" rel="noopener noreferrer" alt="LinkedIn">
                                <FaLinkedin style={{ color: 'aliceblue', height: '80%' }} />
                            </a>
                            <a className="btn btn-outline-dark btn-social mx-2" href="https://gamingsoft.itch.io/" target="_blank" rel="noopener noreferrer" alt="Personal Projects">
                                <FaItchIo style={{ color: 'aliceblue', height: '80%' }} />
                            </a>
                            <a className="btn btn-outline-dark btn-social mx-2" href="https://soundcloud.com/raul-ibarra-aranda" target="_blank" rel="noopener noreferrer" alt="SoundCloud">
                                <FaSoundcloud style={{ color: 'aliceblue', height: '80%' }} />
                            </a>
                        </Col>
                    </Row>
                </div>
            </footer>
            {/* Copyright Section */}
            <section className="copyright py-4 text-center text-white">
                <div className="container">
                    <small className="pre-wrap">Copyright © Raul Ibarra Aranda 2024</small>
                </div>
            </section>
        </>
    );
};

export default Footer;
