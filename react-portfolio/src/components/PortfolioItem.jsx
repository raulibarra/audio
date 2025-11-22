import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PortfolioItem = ({ title, subtitle, description, metadata, contributions, media, uniqueValue, soundcloudHeight = 100 }) => {
    return (
        <div className="text-white mb-5">
            <div className="text-white">
                <h3>{title}</h3>
                <h6>{subtitle}</h6>
                <p style={{ textAlign: 'justify', marginTop: '1rem' }}>
                    {description}
                </p>
            </div>

            <div className="container-fluid">
                <Row>
                    {/* Left Column: Text Content */}
                    <Col lg={6} className="text-white">
                        {/* Project Metadata */}
                        <div style={{ backgroundColor: 'rgba(60, 65, 121, 0.15)', padding: '0.75rem', borderRadius: '5px', marginTop: '0.75rem', marginBottom: '1rem' }}>
                            {metadata.map((item, index) => (
                                <p key={index} style={{ margin: '0.25rem 0' }}>
                                    {item.label && <strong>{item.label}: </strong>}
                                    {item.value}
                                </p>
                            ))}
                        </div>

                        <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Key Contributions:</strong></p>
                        <ul style={{ textAlign: 'justify', marginBottom: '1rem' }}>
                            {contributions.map((item, index) => (
                                <li key={index}><strong>{item.title}:</strong> {item.text}</li>
                            ))}
                        </ul>
                    </Col>

                    {/* Right Column: Media Content */}
                    <Col lg={6}>
                        {media.map((item, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem' }}>
                                <h5 className="text-white" style={{ marginBottom: '1rem' }}>{item.title}</h5>
                                {item.type === 'youtube' && (
                                    <div className="embed-responsive embed-responsive-16by9" style={{ aspectRatio: '16/9' }}>
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
                                    <iframe
                                        width="100%"
                                        height={soundcloudHeight}
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        src={item.src}
                                        title={item.title}
                                    ></iframe>
                                )}
                                {item.type === 'itch' && (
                                    <div style={{ marginTop: '1rem', minWidth: '100%' }}>
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
                        <p className="text-white" style={{ padding: '0.75rem', backgroundColor: 'rgba(60, 65, 121, 0.2)', borderLeft: '3px solid #3c4179', margin: '0.75rem 0 0 0' }}>
                            <strong>💡 Unique Value:</strong> {uniqueValue}
                        </p>
                    )}
                </Row>
            </div>
            <hr className="hr hr-blurry" style={{ borderColor: 'aliceblue', marginTop: '25pt' }} />
        </div>
    );
};

export default PortfolioItem;
