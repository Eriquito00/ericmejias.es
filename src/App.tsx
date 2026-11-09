import { useEffect, useState } from 'react';
import SkipLink from './components/SkipLink';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';
import type { Certificate, Project, Theme } from './types/portfolio';

const App = () => {
  const [theme, setTheme] = useState<Theme>(() => typeof window !== 'undefined' && localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <SkipLink targetId="main-content" />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" className="main-content">
        <Hero />
        <Experience />
        <Skills />
        <Projects setActiveProject={setActiveProject} />
        <Certificates setActiveCertificate={setActiveCertificate} />
        <Contact />
      </main>
      <Footer theme={theme} />
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
      {activeCertificate && (
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </div>
  );
};

export default App;
