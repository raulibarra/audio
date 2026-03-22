import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Carousel } from 'react-bootstrap';
import { FaCode, FaTools, FaUser, FaBuilding, FaMicrochip, FaSearchPlus, FaTimes, FaGitlab, FaExternalLinkAlt, FaHandPointRight, FaLink } from 'react-icons/fa';

const PortfolioItem = ({ id, title, subtitle, description, metadata, contributions, media, uniqueValue, techStack, technicalImages, showTechnical = false, soundcloudHeight = 100, repoUrl }) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [expandedImage, setExpandedImage] = useState(null);
    const [hoveredImageIdx, setHoveredImageIdx] = useState(null);
    const [carouselPaused, setCarouselPaused] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [isTechHovered, setIsTechHovered] = useState(false);
    const [isOverviewHovered, setIsOverviewHovered] = useState(false);

    const handleSlideInteraction = (idx) => {
        setActiveSlide(idx);
        setCarouselPaused(true);
    };

    // Responsive tab bar sizing
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    const isMobile = windowWidth < 480;
    const isTablet = windowWidth >= 480 && windowWidth < 768;
    const tabPad = isMobile ? '5px 9px' : isTablet ? '6px 12px' : '8px 14px';
    const tabFont = isMobile ? '0.72rem' : isTablet ? '0.78rem' : '0.85rem';
    const codePad = isMobile ? '5px 8px' : isTablet ? '6px 10px' : '8px 12px';
    const codeFont = isMobile ? '0.7rem' : isTablet ? '0.76rem' : '0.8rem';
    const iconSize = isMobile ? 11 : isTablet ? 12 : 13;

    // Helper to get icon for metadata label
    const getMetadataIcon = (label) => {
        const l = label.toLowerCase();
        if (l.includes('role')) return <FaUser />;
        if (l.includes('company') || l.includes('client')) return <FaBuilding />;
        return <FaMicrochip />;
    };

    const hasTechnical = showTechnical && technicalImages && technicalImages.length > 0;

    return (
        <div id={id} className="portfolio-item mb-5 p-4 glass-panel" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div className="text-white mb-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                        <a 
                            href={`#${id}`} 
                            className="project-link" 
                            style={{ textDecoration: 'none' }} 
                            title="Click to get deep link"
                            onClick={(e) => {
                                e.preventDefault();
                                window.history.pushState(null, null, `#${id}`);
                                window.dispatchEvent(new Event('hashchange'));
                            }}
                        >
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '8.5px' }}>
                                {title}
                                <FaLink className="project-link-icon" style={{ fontSize: '0.7em', opacity: 0.4, transition: 'all 0.2s ease' }} />
                            </h3>
                        </a>
                    {/* Tech Stack Badges */}
                    {techStack && (
                        <div className="mt-2 mt-md-0 d-flex flex-wrap align-items-center" style={{ gap: '8px', justifyContent: 'flex-end' }}>
                            {techStack.map((tech, idx) => (
                                <span key={idx} style={{
                                    display: 'inline-block',
                                    backgroundColor: 'var(--accent-secondary)',
                                    color: '#e0e0e0',
                                    borderRadius: '50px',
                                    padding: '6px 12px',
                                    fontWeight: '500',
                                    fontSize: '0.85rem',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                }}>
                                    {tech}
                                </span>
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

            {/* Tab Selector - Only if showing technical content */}
            {hasTechnical && (
                <div className="d-flex align-items-center mb-4 p-1" style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    justifyContent: 'space-between',
                }}>
                    {/* Left: Tab buttons */}
                    <div style={{ display: 'flex', alignItems: 'stretch', gap: '8px' }}>
                        <button
                            onClick={() => setActiveTab('overview')}
                            onMouseEnter={() => setIsOverviewHovered(true)}
                            onMouseLeave={() => setIsOverviewHovered(false)}
                            style={{
                                padding: tabPad,
                                borderRadius: '10px',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: activeTab === 'overview' ? 'rgba(255,255,255,0.15)' : 'transparent',
                                color: activeTab === 'overview' || isOverviewHovered ? '#fff' : 'rgba(255,255,255,0.5)',
                                fontSize: tabFont,
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                boxShadow: isOverviewHovered && activeTab !== 'overview'
                                    ? '0 0 15px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
                                    : 'none',
                            }}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('technical')}
                            onMouseEnter={() => setIsTechHovered(true)}
                            onMouseLeave={() => setIsTechHovered(false)}
                            style={{
                                padding: tabPad,
                                borderRadius: '10px',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px',
                                backgroundColor: activeTab === 'technical' ? 'var(--accent-secondary)' : 'rgba(0, 243, 255, 0.08)',
                                color: activeTab === 'technical' ? '#fff' : '#00f3ff',
                                fontSize: tabFont,
                                fontWeight: '800',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                boxShadow: activeTab === 'technical'
                                    ? '0 0 25px rgba(0, 243, 255, 0.4)'
                                    : isTechHovered
                                        ? '0 0 20px rgba(0, 243, 255, 0.3), inset 0 0 0 2px rgba(0, 243, 255, 0.5)'
                                        : '0 0 15px rgba(0, 243, 255, 0.1), inset 0 0 0 1px rgba(0, 243, 255, 0.3)',
                                marginLeft: '0',
                                textTransform: 'uppercase',
                                letterSpacing: isMobile ? '0.5px' : '1px',
                            }}
                        >
                            <FaCode size={iconSize} style={{
                                filter: activeTab !== 'technical' ? 'drop-shadow(0 0 5px rgba(0, 243, 255, 0.6))' : 'none',
                                transform: isTechHovered ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.2s ease',
                                flexShrink: 0,
                            }} />
                            Technical
                        </button>
                    </div>
                    {/* Right: Repo link */}
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                padding: codePad,
                                marginRight: '4px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(252, 109, 38, 0.15)',
                                border: '1px solid rgba(252, 109, 38, 0.45)',
                                color: '#FC6D26',
                                fontWeight: '700',
                                fontSize: codeFont,
                                textDecoration: 'none',
                                letterSpacing: '0.03em',
                                transition: 'all 0.22s ease',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = 'rgba(252, 109, 38, 0.28)';
                                e.currentTarget.style.borderColor = 'rgba(252, 109, 38, 0.75)';
                                e.currentTarget.style.boxShadow = '0 0 14px rgba(252, 109, 38, 0.25)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'rgba(252, 109, 38, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(252, 109, 38, 0.45)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <FaHandPointRight size={iconSize} style={{ flexShrink: 0 }} />
                            See Code
                            <FaExternalLinkAlt size={isMobile ? 7 : 8} style={{ opacity: 0.7 }} />
                        </a>
                    )}
                </div>
            )}

            <div className="container-fluid px-0">
                {activeTab === 'overview' ? (
                    <>
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
                            </Col>
                        </Row>
                        <Row>
                            {/* Full-Width Unique Value Section */}
                            {uniqueValue && (
                                <div className="mt-3 p-3" style={{
                                    background: 'linear-gradient(90deg, rgba(112, 0, 255, 0.1) 0%, rgba(0, 243, 255, 0.05) 100%)',
                                    borderLeft: '4px solid var(--accent-secondary)',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.18)',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
                                    borderRadius: '0 8px 8px 0',
                                    width: '100%'
                                }}>
                                    <p className="m-0" style={{ color: '#fff' }}>
                                        <strong style={{ color: 'var(--accent-secondary)' }}>💡 Unique Value:</strong> {uniqueValue}
                                    </p>
                                </div>
                            )}
                        </Row>
                    </>
                ) : (
                    <div className="animate-fade-in">
                        <Row className="align-items-stretch">
                            {/* Left: Description Panel */}
                            <Col lg={4} className="mb-4 mb-lg-0 d-flex">
                                <div style={{
                                    padding: '1.75rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        {/* Caption / Title */}
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
                                            <div style={{
                                                width: '4px',
                                                flexShrink: 0,
                                                alignSelf: 'stretch',
                                                minHeight: '20px',
                                                background: 'var(--accent-secondary)',
                                                borderRadius: '4px'
                                            }} />
                                            <h6 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '1rem', lineHeight: '1.4' }}>
                                                {technicalImages[activeSlide]?.caption || 'Technical Detail'}
                                            </h6>
                                        </div>
                                        {/* Description */}
                                        <div style={{ color: '#b0b8c8', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                                            {(() => {
                                                const desc = technicalImages[activeSlide]?.description || 'Technical implementation screenshot showing the architecture behind this system.';
                                                return desc.split('\n').map((line, i) => {
                                                    if (!line.trim()) return <div key={i} style={{ height: '0.8rem' }} />;

                                                    // Check if line has a label (e.g., "Challenge: ...")
                                                    const colonIndex = line.indexOf(':');
                                                    if (colonIndex > 0 && colonIndex < 30) {
                                                        const label = line.substring(0, colonIndex + 1);
                                                        const content = line.substring(colonIndex + 1);
                                                        return (
                                                            <p key={i} style={{ marginBottom: '0.75rem' }}>
                                                                <strong style={{ color: 'var(--accent-primary)', opacity: 0.9 }}>{label}</strong>
                                                                {content}
                                                            </p>
                                                        );
                                                    }

                                                    return <p key={i} style={{ marginBottom: '0.75rem' }}>{line}</p>;
                                                });
                                            })()}
                                        </div>
                                    </div>
                                    {/* Slide Dot Indicators */}
                                    {technicalImages.length > 1 && (
                                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                            {technicalImages.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => handleSlideInteraction(idx)}
                                                    style={{
                                                        width: idx === activeSlide ? '28px' : '8px',
                                                        height: '8px',
                                                        borderRadius: '4px',
                                                        background: idx === activeSlide ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)',
                                                        transition: 'all 0.3s ease',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            ))}
                                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginLeft: '4px' }}>
                                                {activeSlide + 1} / {technicalImages.length}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Col>

                            {/* Right: Carousel */}
                            <Col lg={8}>
                                <Carousel
                                    activeIndex={activeSlide}
                                    onSelect={handleSlideInteraction}
                                    indicators={false}
                                    interval={carouselPaused ? null : 4000}
                                    pause="hover"
                                    style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.45)' }}
                                >
                                    {technicalImages.map((img, idx) => (
                                        <Carousel.Item key={idx}>
                                            <div
                                                style={{
                                                    height: '340px',
                                                    backgroundColor: '#080810',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    cursor: img.src ? 'zoom-in' : 'default'
                                                }}
                                                onMouseEnter={() => img.src && setHoveredImageIdx(idx)}
                                                onMouseLeave={() => setHoveredImageIdx(null)}
                                            >
                                                {img.src ? (
                                                    <>
                                                        <img
                                                            className="d-block w-100"
                                                            src={img.src}
                                                            alt={img.caption}
                                                            style={{ objectFit: 'contain', height: '100%' }}
                                                        />
                                                        {/* Magnifier Button */}
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); setCarouselPaused(true); setExpandedImage(img.src); }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: `translate(-50%, -50%) scale(${hoveredImageIdx === idx ? 1 : 0.75})`,
                                                                opacity: hoveredImageIdx === idx ? 1 : 0,
                                                                backgroundColor: 'rgba(0, 0, 0, 0.72)',
                                                                border: '2px solid rgba(255,255,255,0.35)',
                                                                borderRadius: '50%',
                                                                width: '56px',
                                                                height: '56px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                cursor: 'zoom-in',
                                                                transition: 'opacity 0.22s ease, transform 0.22s ease',
                                                                color: 'white',
                                                                zIndex: 10,
                                                                backdropFilter: 'blur(6px)',
                                                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                                                            }}
                                                        >
                                                            <FaSearchPlus size={22} />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className="text-center p-4">
                                                        <FaTools size={48} color="#444" />
                                                        <p className="mt-3" style={{ color: '#555', fontSize: '0.9rem' }}>
                                                            {img.caption || 'Technical Screenshot Coming Soon'}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>

            {/* Lightbox Modal — rendered via portal to escape glass-panel stacking context */}
            {expandedImage && ReactDOM.createPortal(
                <div
                    onClick={() => setExpandedImage(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.93)',
                        zIndex: 99999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setExpandedImage(null)}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '24px',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.25)',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'background 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        <FaTimes size={18} />
                    </button>

                    {/* Expanded Image — constrained to viewport */}
                    <img
                        src={expandedImage}
                        alt="Expanded technical screenshot"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: 'calc(100vw - 60px)',
                            maxHeight: 'calc(100vh - 60px)',
                            objectFit: 'contain',
                            borderRadius: '10px',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.85)',
                            display: 'block'
                        }}
                    />

                    {/* Dismiss hint */}
                    <p style={{
                        position: 'absolute',
                        bottom: '18px',
                        margin: 0,
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.04em'
                    }}>
                        Click anywhere to close
                    </p>
                </div>,
                document.body
            )}
        </div>
    );
};

export default PortfolioItem;
