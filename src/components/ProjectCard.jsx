import React from 'react';
import Tilt from 'react-parallax-tilt';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => {
    return (
        <Tilt
            className="project-tilt-wrapper"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="16px"
        >
            <div className="project-card glass-panel">
                <div className="project-image-placeholder">
                    <img src={image} alt={title} className="project-image" />
                    <div className="glow-effect"></div>
                </div>
                <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-desc">{description}</p>

                    <div className="tech-stack">
                        {techStack.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                    </div>

                    <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
                        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Live Demo</a>}
                        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>GitHub</a>}
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
