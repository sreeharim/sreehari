import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => {
    return (
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

                <div className="project-links">
                    {liveLink && <a href={liveLink} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                    {githubLink && <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
