import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import ethapadamImg from '../assets/ethapadam.png';
import trainImg from '../assets/train.png';
import stickersImg from '../assets/stickers.png';

const projectsData = [
    {
        title: 'Ethapadam',
        description: 'A high-performance web application designed for Malayalam cinema enthusiasts. Features a dynamic "5-clue" game mechanic that rewards speed and deductive reasoning.',
        techStack: ['React.js', 'Supabase', 'Vite', 'Firebase', 'Vercel'],
        liveLink: 'https://www.ethapadam.com/',
        githubLink: 'https://github.com/sreeharim/ethapadam',
        image: ethapadamImg
    },
    {
        title: 'Train Reminder',
        description: 'Automated Booking Alert System. Eliminates the "Tatkal hassle" by monitoring train booking windows in real-time. Leverages precise scheduling and push notifications.',
        techStack: ['React Native', 'Mobile', 'Scheduling', 'JS', 'External APIs'],
        liveLink: 'https://play.google.com/store/apps/details?id=com.trainreminder.app',
        githubLink: 'https://github.com/sreeharim/train-reminder',
        image: trainImg
    },
    {
        title: 'Malayalam WhatsApp Stickers',
        description: 'A viral Android utility serving a curated library of regional expression stickers to over 100,000+ users. Optimized for high performance and low latency.',
        techStack: ['Java', 'Android Studio', 'Firebase', 'WhatsApp API'],
        liveLink: 'https://play.google.com/store/apps/details?id=com.sreehari.sticker',
        githubLink: 'https://github.com/sreeharim/malayalamsticker',
        image: stickersImg
    }
];

const Projects = () => {
    return (
        <section className="projects container" id="projects">
            <div className="section-header">
                <h2 className="heading-lg">Featured <span className="text-gradient">Projects</span></h2>
                <div className="header-line"></div>
            </div>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
