import { useLanguage } from '../../i18n/useLanguage';
import AINetworkGraph from './AINetworkGraph';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-name">Eric Mejias Gamonal</h1>
          <p className="hero-meta">Eriquito00 · GitHub</p>

          <p className="hero-role">{t.hero.role}</p>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-meta">
            <span>{t.hero.location}</span>
            <span>{t.hero.approach}</span>
            <span>{t.hero.stack}</span>
          </div>

          <div className="hero-actions">
            <a
              className="hero-link-button"
              href="https://github.com/Eriquito00"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.github}
            </a>
            <a
              className="hero-link-button"
              href="https://www.linkedin.com/in/eric-mejias-gamonal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.linkedin}
            </a>
            <a
              className="hero-link-button"
              href="https://www.blogger.com/profile/00987636027947868735"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.blogger}
            </a>
            <a
              className="hero-link-button"
              href="/docs/ATS_CV_Eric_Mejias.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.cv}
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <AINetworkGraph />
        </div>
      </div>
    </section>
  );
};

export default Hero;
