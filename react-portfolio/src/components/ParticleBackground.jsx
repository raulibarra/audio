import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.01;

            // Wave settings
            const waves = [
                { y: canvas.height * 0.5, length: 0.01, amplitude: 50, speed: 0.05, color: 'rgba(0, 243, 255, 0.2)' },
                { y: canvas.height * 0.5, length: 0.02, amplitude: 30, speed: 0.03, color: 'rgba(112, 0, 255, 0.2)' },
                { y: canvas.height * 0.5, length: 0.005, amplitude: 70, speed: 0.07, color: 'rgba(0, 243, 255, 0.1)' }
            ];

            waves.forEach(wave => {
                ctx.beginPath();
                ctx.moveTo(0, wave.y);

                for (let i = 0; i < canvas.width; i++) {
                    ctx.lineTo(i, wave.y + Math.sin(i * wave.length + time + wave.speed) * wave.amplitude * Math.sin(time));
                }

                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: 'radial-gradient(circle at center, #1a1a2e 0%, #050505 100%)'
            }}
        />
    );
};

export default ParticleBackground;
