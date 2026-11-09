import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, isLanguage } from './context';
import { translations } from './translations';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = typeof window === 'undefined' ? null : localStorage.getItem('portfolio-language');
    return isLanguage(savedLanguage) ? savedLanguage : 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = translations[language].seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[language].seo.description);
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute('content', translations[language].seo.title);
    }
    for (const selector of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute('content', translations[language].seo.description);
    }
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', { es: 'es_ES', ca: 'ca_ES', en: 'en_US' }[language]);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
};
