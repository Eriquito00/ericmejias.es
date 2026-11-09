import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
assert.match(html, /<h1[^>]*>Eric Mejias Gamonal<\/h1>/);
assert.match(html, /Eriquito00/);
assert.match(html, /href="https:\/\/github.com\/Eriquito00\/Primero"/);
assert.match(html, /href="https:\/\/ericmejias.es\/pianoman\/"/);
assert.match(html, /property="og:title"/);
assert.match(html, /name="twitter:card"/);
assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.ok(graph['@graph'].some(item => item['@type'] === 'Person' && item.alternateName === 'Eriquito00'));
for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
  assert.ok(existsSync(`dist${asset}`), `Missing built asset: ${asset}`);
}
console.log('SEO: rendered identity, links, metadata, structured data and assets verified.');
