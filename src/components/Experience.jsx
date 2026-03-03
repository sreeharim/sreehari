import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience container" id="experience">
            <div className="section-header">
                <h2 className="heading-lg"><span className="text-gradient">Experience</span></h2>
                <div className="header-line"></div>
            </div>
            <p className="experience-subtitle">Professional career journey & milestones</p>

            <Tilt
                className="experience-tilt-wrapper"
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1000}
                transitionSpeed={1000}
                scale={1}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
            >
                <div className="experience-card glass-panel">
                    <div className="company-header">
                        <div className="company-logo">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 14V10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4M4 14v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4M4 14h16M10 6v2M14 6v2M8 14v2M12 14v2M16 14v2" />
                            </svg>
                        </div>
                        <div className="company-info">
                            <h3>Verizon</h3>
                            <span className="company-domain">Telecommunications</span>
                        </div>
                    </div>

                    <div className="timeline">
                        {/* Role 1 */}
                        <div className="timeline-item active">
                            <div className="timeline-dot-wrapper">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content">
                                <div className="role-header">
                                    <h4>Senior React Engineer</h4>
                                    <span className="duration">4 YEARS</span>
                                </div>
                                <span className="period">2021 - 2025</span>
                                <ul className="role-highlights">
                                    <li>Led frontend architecture, development, and scaling for complex enterprise-level applications.</li>
                                    <li>Modernized legacy applications by migrating them to modern ecosystems powered by React, Redux, and Node.js.</li>
                                    <li>Collaborated with large cross-functional teams to build and maintain unified UI systems.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Role 2 */}
                        <div className="timeline-item">
                            <div className="timeline-dot-wrapper">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content">
                                <div className="role-header">
                                    <h4>Level 3 Engineer</h4>
                                    <span className="duration">5 YEARS</span>
                                </div>
                                <span className="period">2016 - 2021</span>
                            </div>
                        </div>

                        {/* Role 3 */}
                        <div className="timeline-item">
                            <div className="timeline-dot-wrapper">
                                <div className="timeline-dot"></div>
                            </div>
                            <div className="timeline-content pb-0">
                                <div className="role-header">
                                    <h4>Level 2 Engineer</h4>
                                    <span className="duration">2 YEARS</span>
                                </div>
                                <span className="period">2014 - 2016</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        </section>
    );
};

export default Experience;
