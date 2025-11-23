import React from 'react';
import { Row, Col, Carousel, Badge } from 'react-bootstrap';
import { FaCode, FaTools, FaUser, FaBuilding, FaMicrochip } from 'react-icons/fa';

const PortfolioItem = ({ title, subtitle, description, metadata, contributions, media, uniqueValue, techStack, technicalImages, soundcloudHeight = 100 }) => {

    // Helper to get icon for metadata label
    const getMetadataIcon = (label) => {
        const l = label.toLowerCase();
        if (l.includes('role')) return <FaUser />;
        if (l.includes('company') || l.includes('client')) return <FaBuilding />;
        return <FaMicrochip />;
    };

    return (
        <div className="portfolio-item mb-5 p-4 glass-panel" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div className="text-white mb-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{title}</h3>
                        <h6 style={{ color: 'var(--text-secondary)', fontWeight: '400', letterSpacing: '0.05em' }}>{subtitle}</h6>
                    </div>
                    {/* Tech Stack Badges */}
                    {techStack && (
                        <div className="mt-2 mt-md-0 text-md-right">
                            {techStack.map((tech, idx) => (
                                <Badge key={idx} pill bg="dark" className="mr-1 mb-1" style={{
                                    border: '1px solid var(--accent-secondary)',
                                    color: 'var(--accent-secondary)',
                                    marginRight: '5px',
                                    padding: '6px 10px',
                                    fontWeight: '500',
                                    fontSize: '0.85rem'
                                }}>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>

                {/* Horizontal Metadata Bar */}
                <div className="d-flex flex-wrap align-items-center mt-3 mb-3 p-2" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.9rem'
                }}>
                    {metadata.map((item, index) => (
                        <div key={index} className="mr-3 mb-1 d-flex align-items-center" style={{ marginRight: '20px' }}>
                            <span style={{ color: 'var(--accent-primary)', opacity: 0.8, marginRight: '8px' }}>
                                {getMetadataIcon(item.label)}
                            </span>
                            <span style={{ color: '#e0e0e0' }}>
                                <strong style={{ fontWeight: '600', marginRight: '5px', color: '#fff' }}>{item.label}:</strong>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

                <p style={{ textAlign: 'justify', marginTop: '1rem', fontSize: '1.05rem', color: '#d0d0d0', lineHeight: '1.5' }}>
                    {description}
                </p>
            </div>

            <div className="container-fluid px-0">
                <Row>
                    {/* Left Column: Contributions (List) */}
                    <Col lg={6} className="text-white mb-4 mb-lg-0">
                        <h5 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '2px solid var(--accent-secondary)', display: 'inline-block', paddingBottom: '0.25rem' }}>Key Contributions</h5>

                        <div className="custom-list">
                            {contributions.map((item, index) => (
                                <div key={index} style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-secondary)', paddingLeft: '15px', backgroundColor: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '0 8px 8px 0' }}>
                                    <strong style={{ color: '#fff', display: 'block', marginBottom: '6px', fontSize: '1.05rem' }}>{item.title}</strong>

                                    {/* Standard Text Format */}
                                    {item.text && <div style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.5' }}>{item.text}</div>}

                                    {/* Challenge / Solution Format */}
                                    {item.challenge && (
                                        <div className="mt-2" style={{ fontSize: '0.95rem' }}>
                                            <div style={{ display: 'flex', marginBottom: '4px' }}>
                                                <span style={{ color: '#ff6b6b', fontWeight: 'bold', minWidth: '80px' }}>Challenge:</span>
                                                <span style={{ opacity: 0.9 }}>{item.challenge}</span>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <span style={{ color: '#51cf66', fontWeight: 'bold', minWidth: '80px' }}>Solution:</span>
                                                <span style={{ opacity: 0.9 }}>{item.solution}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Col>

                    {/* Right Column: Media Content */}
                    <Col lg={6}>
                        {/* Gameplay / Main Media */}
                        {media.map((item, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem' }}>
                                {item.title && <h6 className="text-white mb-2" style={{ opacity: 0.8, fontSize: '0.9rem' }}>{item.title}</h6>}
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

                        {/* Technical "Under the Hood" Carousel */}
                        {technicalImages && technicalImages.length > 0 && (
                            <div className="mt-4 mb-4">
                                <h6 className="text-white mb-3" style={{ opacity: 0.9, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <FaCode /> Under the Hood: Implementation Details
                                </h6>
                                <Carousel style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                                    {technicalImages.map((img, idx) => (
                                        <Carousel.Item key={idx}>
                                            <div style={{ height: '300px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {/* Placeholder if no image provided yet, or actual image */}
                                                {img.src ? (
                                                    <img className="d-block w-100" src={img.src} alt={img.caption} style={{ objectFit: 'contain', height: '100%' }} />
                                                ) : (
                                                    <div className="text-center p-4">
                                                        <FaTools size={40} color="#555" />
                                                        <p className="mt-3 text-muted">{img.caption || "Technical Screenshot Placeholder"}</p>
                                                    </div>
                                                )}
                                            </div>
                                            <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '8px', padding: '10px' }}>
                                                <p className="mb-0 small">{img.caption}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        )}
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
