import React, { useState, useEffect } from 'react';

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
            }, 750);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="bg-indigo text-white text-center">
            <div style={{ height: '80px' }}></div>
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <img
                    src="/assets/img/banner-min.jpg"
                    className="img-fluid"
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                    alt="site banner"
                />
                <div className="header-title">Raúl Ibarra Aranda</div>
                <div
                    id="subtitle"
                    className="header-subtitle"
                    style={{ opacity: opacity, transition: 'opacity 0.75s ease-in-out' }}
                >
                    {texts[index]}
                </div>
            </div>
        </header>
    );
};

export default Header;
