import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <span className="footer__logo-accent">R</span>K
            </a>
            <p className="footer__tagline">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <nav className="footer__nav">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__contact-info">
            <h4 className="footer__links-title">Contact</h4>
            <p>kamalkrish928@gmail.com</p>
            <p>+91 8270099304</p>
            <p>Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Rajkamal Shanmugam. All rights reserved.
          </p>

          <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
