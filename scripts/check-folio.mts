import { links, pageDescription, personJsonLd } from "../src/content/site.ts";
import { readFileSync } from "node:fs";

const page = readFileSync(new URL("../src/components/portfolio.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/site.css", import.meta.url), "utf8");
const blob = page + pageDescription + JSON.stringify(personJsonLd);

const allowed = new Set<string>([links.github, links.linkedin, links.docmind, "https://schema.org"]);
const urls = blob.match(/https?:\/\/[^"'\\\s)]+/g) ?? [];
for (const url of urls) {
  if (!allowed.has(url)) throw new Error(`Unexpected URL: ${url}`);
}

if (page.includes("mailto:") || page.includes("tel:")) throw new Error("Contact channel invented");
if (/[\w.+-]+@[\w-]+\.[a-z]{2,}/i.test(page)) throw new Error("Email invented");
if (/\d+\s*%/.test(page)) throw new Error("Percentage invented");
if (/lorem|testimonial|atlastel/i.test(page)) throw new Error("Placeholder or omitted project");
if (!page.includes("en cours")) throw new Error("SUPMTI in-progress status missing");
if (!page.includes("non-dev")) throw new Error("T3-Shield non-dev label missing");
if (!page.includes("Co-développement")) throw new Error("MENStage co-development missing");
if (!blob.includes(links.docmind)) throw new Error("DocMind link missing");
if (!css.includes("#f7f5ff")) throw new Error("Canvas color missing");
if (css.includes("Fraunces") || page.includes("font-display")) {
  /* display utility is allowed; Fraunces must not return */
}
if (/Fraunces|Instrument Serif/.test(page + css)) throw new Error("Old editorial font returned");

console.log("folio checks ok");
