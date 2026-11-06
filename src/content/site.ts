export const links = {
  github: "https://github.com/nuhiila",
  linkedin: "https://www.linkedin.com/in/nouhaila-el-kharfachi-07463a233",
  docmind: "https://github.com/nuhiila/docmind",
} as const;

export const pageTitle = "Nouhaila Elkharfachi — Full-stack et QA, Salé";

export const pageDescription =
  "Portfolio de Nouhaila Elkharfachi, étudiante en ingénierie des systèmes d’information à SUPMTI Rabat (cycle en cours). Recherche d’un stage PFE en développement full-stack et automatisation QA. Salé, Maroc.";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nouhaila Elkharfachi",
  jobTitle: "Étudiante en ingénierie des systèmes d’information",
  description: pageDescription,
  homeLocation: {
    "@type": "Place",
    name: "Salé",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salé",
      addressCountry: "MA",
    },
  },
  knowsLanguage: ["ar", "fr", "en"],
  sameAs: [links.github, links.linkedin],
  subjectOf: {
    "@type": "SoftwareSourceCode",
    name: "DocMind",
    codeRepository: links.docmind,
  },
};
