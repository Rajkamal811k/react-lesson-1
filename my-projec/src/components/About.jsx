import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Hindustan Arts and Science College, Coimbatore',
    year: '2023 – 2026',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Ragavendra Higher Secondary School, Sathyamangalam',
    year: '2022 – 2023',
    icon: '📚',
  },
];

const STATS = [
  { value: '5+', label: 'Programming Skills' },
  { value: '2', label: 'Languages Known' },
  { value: '1', label: 'Internship Completed' },
  { value: '∞', label: 'Willingness to Learn' },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Know Me Better</h2>
          <p className="section-subtitle">
            A passionate IT graduate eager to contribute to meaningful projects
          </p>
        </div>

        <div className="about__grid">
          <div className="about__summary reveal reveal-delay-1">
            <div className="about__summary-card glass-card">
              <h3>Who I Am</h3>
              <p>
                I'm a recent graduate with a Bachelor of Science in Information Technology from 
                Hindustan Arts and Science College, Coimbatore. I'm proficient in programming 
                languages including CSS and Python, with hands-on experience in web development 
                using HTML and CSS.
              </p>
              <p>
                I completed an internship in software development at Gateway Software Solutions, 
                gaining practical exposure to real-world project handling and teamwork. I'm seeking 
                an entry-level role in software development or IT support to apply my academic 
                knowledge and grow professionally.
              </p>
              <div className="about__languages">
                <span className="about__language-tag">🇬🇧 English</span>
                <span className="about__language-tag">🇮🇳 Tamil</span>
              </div>
            </div>
          </div>

          <div className="about__education reveal reveal-delay-2">
            <h3 className="about__edu-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            <div className="about__timeline">
              {EDUCATION.map((edu, i) => (
                <div key={i} className={`about__timeline-item reveal reveal-delay-${i + 3}`}>
                  <div className="about__timeline-marker">
                    <span>{edu.icon}</span>
                  </div>
                  <div className="about__timeline-content glass-card">
                    <span className="about__timeline-year">{edu.year}</span>
                    <h4>{edu.degree}</h4>
                    <p>{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <div key={i} className={`about__stat-card glass-card reveal reveal-delay-${i + 1}`}>
              <span className="about__stat-value gradient-text">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
