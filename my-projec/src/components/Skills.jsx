import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: 'Python', level: 75 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 60 },
    ],
    accent: 'purple',
  },
  {
    title: 'Web Technologies',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
      { name: 'React (Learning)', level: 40 },
    ],
    accent: 'cyan',
  },
  {
    title: 'Tools & Databases',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: 'MongoDB', level: 55 },
      { name: 'VS Code', level: 85 },
      { name: 'Git', level: 50 },
    ],
    accent: 'purple',
  },
  {
    title: 'Creative Skills',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    skills: [
      { name: 'Photoshop', level: 65 },
      { name: 'Video Editing', level: 60 },
      { name: 'Photo Retouching', level: 60 },
    ],
    accent: 'cyan',
  },
];

const KEY_SKILLS = [
  'Problem Solving & Analytical Thinking',
  'Time Management & Task Prioritization',
  'Team Collaboration & Communication',
  'Quick Learner with Adaptability',
  'Software Development Lifecycle (SDLC)',
  'Linux & Windows Administration',
];

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            A blend of technical proficiency and creative skills
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i} className={`skills__card glass-card reveal reveal-delay-${i + 1}`}>
              <div className={`skills__card-icon skills__card-icon--${cat.accent}`}>
                {cat.icon}
              </div>
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__bars">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="skills__bar-item">
                    <div className="skills__bar-header">
                      <span className="skills__bar-name">{skill.name}</span>
                      <span className="skills__bar-percent">{skill.level}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className={`skills__bar-fill skills__bar-fill--${cat.accent}`}
                        style={{ '--fill-width': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__soft reveal reveal-delay-2">
          <h3 className="skills__soft-title">Key Strengths</h3>
          <div className="skills__tags">
            {KEY_SKILLS.map((skill, i) => (
              <span key={i} className="skills__tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
