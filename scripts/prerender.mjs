import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';

const output = 'node_modules/.portfolio-prerender';
try {
  await build({ build: { ssr: 'src/entry-server.tsx', outDir: output, emptyOutDir: true } });
  const { render, seo } = await import('../node_modules/.portfolio-prerender/entry-server.js');
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`);
  html = html.replace(/<title>.*?<\/title>/, () => `<title>${escape(seo.title)}</title>`);
  html = html.replace(/(<meta (?:name="(?:description|twitter:description)"|property="og:description") content=")[^"]*/g, (_, prefix) => prefix + escape(seo.description));
  html = html.replace(/(<meta (?:name="twitter:title"|property="og:title") content=")[^"]*/g, (_, prefix) => prefix + escape(seo.title));
  await writeFile('dist/index.html', html);
} finally {
  await rm(output, { recursive: true, force: true });
}
