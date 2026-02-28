import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Hero.css';
import avatarImg from '../assets/avatar.png';

const Hero = () => {
    return (
        <section className="hero container" id="about">
            <div className="hero-content">
                <div className="hero-avatar">
                    <Tilt
                        className="avatar-tilt-wrapper"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        transitionSpeed={1000}
                        scale={1.05}
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        glareColor="#ffffff"
                        glarePosition="all"
                        glareBorderRadius="50%"
                    >
                        <div className="avatar-placeholder">
                            <img src={avatarImg} alt="Developer Avatar" className="avatar-img" />
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
