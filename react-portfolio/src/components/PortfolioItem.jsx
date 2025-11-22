import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PortfolioItem = ({ title, subtitle, description, metadata, contributions, media, uniqueValue, soundcloudHeight = 100 }) => {
    return (
        <div className="portfolio-item mb-5 p-4 p-lg-5 glass-panel" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div className="text-white mb-4">
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <h6 style={{ color: 'var(--text-secondary)', fontWeight: '400', letterSpacing: '0.05em' }}>{subtitle}</h6>
                <p style={{ textAlign: 'justify', marginTop: '1.5rem', fontSize: '1.1rem', color: '#d0d0d0' }}>
                    {description}
                </p>
            </div>

            <div className="container-fluid px-0">
                <Row>
                    {/* Left Column: Text Content */}
                    <Col lg={6} className="text-white">
                        {/* Project Metadata */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            marginTop: '0.75rem',
                            marginBottom: '2rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            {metadata.map((item, index) => (
                                <div key={index} style={{ marginBottom: '0.5rem', display: 'flex' }}>
                                    <span style={{ color: 'var(--accent-primary)', minWidth: '120px', fontWeight: '600' }}>{item.label}:</span>
                                    <span style={{ color: 'var(--text-secondary)' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <h5 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '2px solid var(--accent-secondary)', display: 'inline-block', paddingBottom: '0.25rem' }}>Key Contributions</h5>
                        <ul style={{ textAlign: 'justify', marginBottom: '2rem', paddingLeft: '1.2rem' }}>
                            {contributions.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem', color: '#e0e0e0' }}>
                                    <strong style={{ color: '#fff' }}>{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Right Column: Media Content */}
                    <Col lg={6}>
                        {media.map((item, index) => (
                            <div key={index} style={{ marginBottom: '2rem' }}>
                                {item.title && <h6 className="text-white mb-3" style={{ opacity: 0.8 }}>{item.title}</h6>}
                                {item.type === 'youtube' && (
                                    <div className="embed-responsive" style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                                        <iframe
                                            className="embed-responsive-item"
                                            src={item.src}
                                            title={item.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            style={{ width: '100%', height: '100%' }}
                                        ></iframe>
                                    </div>
                                )}
                                {item.type === 'soundcloud' && (
                                    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                                        <iframe
                                            width="100%"
                                            height={soundcloudHeight}
                                            scrolling="no"
                                            frameBorder="no"
                                            allow="autoplay"
                                            src={item.src}
                                            title={item.title}
                                        ></iframe>
                                    </div>
                                )}
                                {item.type === 'itch' && (
                                    <div style={{ marginTop: '1rem', minWidth: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                                        <iframe
                                            width="100%"
                                            height="167"
                                            frameBorder="0"
                                            src={item.src}
                                            title={item.title}
                                            style={{ minWidth: '100%' }}
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row>
                    {/* Full-Width Unique Value Section */}
                    {uniqueValue && (
                        <div className="mt-3 p-3" style={{
                            background: 'linear-gradient(90deg, rgba(112, 0, 255, 0.1) 0%, rgba(0, 243, 255, 0.05) 100%)',
                            borderLeft: '4px solid var(--accent-secondary)',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <p className="m-0" style={{ color: '#fff' }}>
                                <strong style={{ color: 'var(--accent-secondary)' }}>💡 Unique Value:</strong> {uniqueValue}
                            </p>
                        </div>
                    )}
                </Row>
            </div>
        </div>
    );
};

export default PortfolioItem;
