import { renderToString } from 'react-dom/server';
import App from './App';
import { LanguageProvider } from './i18n/LanguageProvider';
import { translations } from './i18n/translations';

export const seo = translations.es.seo;
export function render() {
  return renderToString(<LanguageProvider><App /></LanguageProvider>);
}
