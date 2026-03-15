import React from 'react';

const HybridProfile = () => {
    return (
        <div style={{
            marginTop: '2.5rem',
            marginBottom: '0.5rem',
            padding: '1.5rem 2rem',
            background: 'rgba(0, 243, 255, 0.03)',
            border: '1px solid rgba(0, 243, 255, 0.08)',
            borderLeft: '3px solid var(--accent-primary)',
            borderRadius: '0 12px 12px 0',
        }}>
            <h4 style={{
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.06em',
                fontSize: '1.05rem',
                marginBottom: '0.5rem',
            }}>
                <span style={{ color: 'var(--accent-primary)' }}>AUDIO SPECIALIST</span>
                <span style={{ color: 'var(--text-secondary)', margin: '0 0.6rem', fontWeight: 300, opacity: 0.6 }}>×</span>
                <span style={{ color: 'var(--text-primary)' }}>GAME DEVELOPER'S TOOLKIT</span>
            </h4>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                marginBottom: 0,
                lineHeight: 1.6,
            }}>
                <em>"I don't just design sound — I architect the code that delivers it."</em>
                {' '}My full game development background (gameplay, UI, multiplayer, systems, backend) means I own audio features end-to-end — without creating cross-team dependencies.
            </p>
        </div>
    );
};

export default HybridProfile;
