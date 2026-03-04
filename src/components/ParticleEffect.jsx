import React, { useState, useEffect } from 'react';
import './ParticleEffect.css';

const ParticleEffect = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        let particleId = 0;

        const handleMouseMove = (e) => {
            // Throttling particle generation slightly to prevent performance issues
            if (Math.random() > 0.6) return;

            const newParticle = {
                id: particleId++,
                x: e.clientX,
                y: e.clientY,
                // Randomize size and offset slightly for a more organic feel
                size: Math.random() * 4 + 2,
                offsetX: (Math.random() - 0.5) * 20,
                offsetY: (Math.random() - 0.5) * 20,
            };

            setParticles((prev) => [...prev, newParticle]);

            // Remove particle after animation completes
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
            }, 600); // slightly longer than animation to ensure it finishes
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="particles-container">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.x + p.offsetX,
                        top: p.y + p.offsetY,
                        width: p.size,
                        height: p.size,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleEffect;
