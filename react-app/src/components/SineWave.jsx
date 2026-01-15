import React, { useEffect, useRef } from 'react';

const SineWave = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        let hue = 0;
        const waves = [
            { amplitude: 30, frequency: 0.01, speed: 0.02, offset: 0 },
            { amplitude: 20, frequency: 0.02, speed: 0.03, offset: 2 },
            { amplitude: 40, frequency: 0.015, speed: 0.01, offset: 4 }
        ];

        const animate = () => {
            ctx.fillStyle = 'rgba(0,0,0,0)'; // Transparent background
            ctx.clearRect(0, 0, width, height);

            const centerY = height / 2;

            ctx.shadowBlur = 10;
            ctx.shadowColor = `hsl(${hue}, 50%, 50%)`;

            waves.forEach((wave, i) => {
                ctx.beginPath();
                ctx.moveTo(0, centerY);

                const time = Date.now() * wave.speed * 0.05; // Adjust speed multiplier

                for (let x = 0; x < width; x++) {
                    const y = centerY + Math.sin(x * wave.frequency + time + wave.offset) * wave.amplitude * Math.sin(x / width * Math.PI); // Window function to taper ends
                    ctx.lineTo(x, y);
                }

                // Cyan/Blue theme: Hue around 180-200 (Cyan is 180, Blue is 240)
                // Let's oscillate slightly or fixed
                const waveHue = 180 + (i * 10) + Math.sin(hue * 0.05) * 20;
                ctx.strokeStyle = `hsla(${waveHue}, 80%, 60%, 0.5)`;
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            hue += 0.5;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
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
                pointerEvents: 'none',
                zIndex: 0 // Background layer
            }}
        />
    );
};

export default SineWave;
