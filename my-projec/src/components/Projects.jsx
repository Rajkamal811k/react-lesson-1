import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React and Vite. Features include smooth animations, glassmorphism design, and interactive components.',
    tags: ['React', 'CSS', 'Vite', 'JavaScript'],
    icon: '🌐',
    accent: 'purple',
  },
  {
    title: 'Python Automation Tool',
    description:
      'A Python-based automation script designed to streamline repetitive tasks. Demonstrates proficiency in Python scripting and logical problem-solving.',
    tags: ['Python', 'Automation', 'Scripting'],
    icon: '🐍',
    accent: 'cyan',
  },
  {
    title: 'Responsive Landing Page',
    description:
      'A pixel-perfect, responsive landing page crafted with HTML and CSS. Focused on modern layout techniques, accessibility, and cross-browser compatibility.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    icon: '🎨',
    accent: 'purple',
  },
  {
    title: 'MongoDB Data Manager',
    description:
      'A simple data management application using MongoDB for CRUD operations. Demonstrates database design skills and data handling concepts.',
    tags: ['MongoDB', 'Database', 'Python'],
    icon: '🗄️',
    accent: 'cyan',
  },
];

export default function Projects() {
  const sectionRef = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A showcase of projects demonstrating my technical abilities
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`projects__card glass-card reveal reveal-delay-${i + 1} projects__card--${project.accent}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="projects__card-header">
                <span className="projects__card-icon">{project.icon}</span>
                <div className="projects__card-links">
                  <span className="projects__card-link" title="View Project">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </div>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="projects__tag">{tag}</span>
                ))}
              </div>

              <div
                className="projects__card-glow"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
