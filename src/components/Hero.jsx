import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container" id="about">
            <div className="hero-content">
                <div className="hero-avatar">
                    <Tilt
                        className="avatar-tilt-wrapper"
                        tiltMaxAngleX={25}
                        tiltMaxAngleY={25}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.15}
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ffffff"
                        glarePosition="all"
                        glareBorderRadius="50%"
                        trackOnWindow={true}
                    >
                        <div className="avatar-placeholder">
                            <img src="/avatar.webp" alt="Developer Avatar" className="avatar-img" />
                        </div>
                    </Tilt>
                </div>
                <div className="hero-text glass-panel">
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="heading-xl"><span className="text-gradient">Sreehari M</span></h1>
                    <p className="hero-bio">
                        A Senior React Engineer specializing in building premium, high-performance web applications with modern technologies and elegant user interfaces.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-glass">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
