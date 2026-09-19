import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const EXPERIENCE_DATA = {
  role: 'Software Development Intern',
  company: 'Gateway Software Solutions',
  period: 'Internship',
  highlights: [
    'Gained hands-on experience in software development through real-world project assignments.',
    'Applied programming skills in CSS and Python to build and test software modules.',
    'Collaborated with team members to deliver project milestones on schedule.',
    'Developed understanding of software development lifecycle (SDLC) and project handling best practices.',
  ],
  skills: ['Python', 'CSS', 'SDLC', 'Team Collaboration', 'Testing'],
};

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Practical industry exposure through internship
          </p>
        </div>

        <div className="experience__card glass-card reveal reveal-delay-1">
          <div className="experience__header">
            <div className="experience__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="experience__meta">
              <h3 className="experience__role">{EXPERIENCE_DATA.role}</h3>
              <p className="experience__company">{EXPERIENCE_DATA.company}</p>
              <span className="experience__period">{EXPERIENCE_DATA.period}</span>
            </div>
          </div>

          <div className="experience__divider" />

          <ul className="experience__highlights">
            {EXPERIENCE_DATA.highlights.map((item, i) => (
              <li key={i} className={`experience__highlight reveal reveal-delay-${i + 2}`}>
                <span className="experience__highlight-dot" />
                {item}
              </li>
            ))}
          </ul>

          <div className="experience__skills">
            {EXPERIENCE_DATA.skills.map((skill, i) => (
              <span key={i} className="experience__skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
