"use client";

import { useEffect, useId, useState } from "react";
import { links } from "@/content/site";

const nav = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact", pill: true },
];

export function Portfolio() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="page">
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <div className="blob blob-lavender" aria-hidden="true" />
      <div className="blob blob-peach" aria-hidden="true" />
      <div className="blob blob-mint" aria-hidden="true" />

      <header className="nav">
        <a className="logo" href="#contenu">
          nouhaila<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {nav.map((item) =>
            item.pill ? (
              <a key={item.href} className="pill" href={item.href}>
                {item.label}
              </a>
            ) : (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ),
          )}
        </nav>
        <button
          type="button"
          className="menu-btn pill"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </header>
      <nav id={menuId} className={open ? "nav-panel is-open" : "nav-panel"} aria-label="Sections mobiles">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
      </nav>

      <main id="contenu">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="badge">
              <span className="dot" aria-hidden="true" />
              <span className="desktop-only">Étudiante ingénierie SI · Recherche stage PFE</span>
              <span className="mobile-only">Stage PFE · Full-stack & QA</span>
            </p>
            <h1 id="hero-title">
              <span className="hero-desktop-title">
                <span className="ink">Je conçois des produits</span>
                <span className="grad">
                  full-stack
                  <br />& fiables.
                </span>
              </span>
              <span className="hero-mobile-title">
                <span className="ink line">Produits</span>
                <span className="grad line">full-stack</span>
                <span className="ink line">utiles.</span>
              </span>
            </h1>
            <p className="bio desktop-only">
              Nouhaila Elkharfachi — SUPMTI Rabat (2024–2027, en cours). Spécialisée en développement
              full-stack et automatisation QA. Basée à Salé, ouverte aux équipes Rabat / Casablanca.
            </p>
            <p className="bio mobile-only">
              Nouhaila Elkharfachi — SUPMTI Rabat. Apps fiables, tests, Docker. Salé, Maroc.
            </p>
            <div className="actions">
              <a className="btn btn-dark" href="#projets">
                <span className="desktop-only">Explorer les projets</span>
                <span className="mobile-only">Projets</span>
              </a>
              <a className="btn btn-light" href={links.github} target="_blank" rel="noopener noreferrer">
                <span className="desktop-only">GitHub →</span>
                <span className="mobile-only">GitHub</span>
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
              <a className="btn btn-light desktop-only" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </div>
            <ul className="chips desktop-only" aria-label="Technos mises en avant">
              {["Java / Spring Boot", "React", "Node.js", "PostgreSQL", "Selenium", "Docker / CI"].map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="code-card" aria-label="Motif de code illustratif, pas un extrait réel">
            <div className="code-window">
              <div className="lights" aria-hidden="true">
                <i className="r" />
                <i className="y" />
                <i className="g" />
              </div>
              <p className="desktop-only">
                <span className="kw">const</span> focus = <span className="str">&quot;PFE full-stack / QA&quot;</span>;
              </p>
              <p className="desktop-only">
                <span className="kw">stack</span>.push(<span className="str">&quot;Spring&quot;</span>,{" "}
                <span className="str">&quot;React&quot;</span>);
              </p>
              <p className="mobile-only">
                focus = <span className="str">&quot;Spring + React&quot;</span>
              </p>
              <p className="cmt desktop-only">{"// DocMind · RAG sourcé"}</p>
              <p className="cmt mobile-only">{"// DocMind RAG"}</p>
              <p className="desktop-only">
                ship(<span className="str">&quot;tests + Docker&quot;</span>);
              </p>
            </div>
            <div className="stats">
              <div className="stat lav desktop-only">
                <strong>3</strong>
                <span>projets phares</span>
              </div>
              <div className="stat mint desktop-only">
                <strong>SI</strong>
                <span>SUPMTI Rabat</span>
              </div>
              <div className="stat peach stat-wide desktop-only">
                <strong>OFPPT → ingénierie</strong>
                <span>parcours digital full-stack 2022–2024</span>
              </div>
              <div className="stat lav mobile-only">
                <strong>DocMind</strong>
                <span>flagship</span>
              </div>
              <div className="stat mint mobile-only">
                <strong>PFE</strong>
                <span>full-stack / QA</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="projets" aria-labelledby="projets-title">
          <div className="section-head">
            <h2 id="projets-title">
              <span className="desktop-only">Projets sélectionnés</span>
              <span className="mobile-only">Projets</span>
            </h2>
            <p className="desktop-only">
              Preuves techniques concrètes — descriptions fidèles, sans métriques inventées.
            </p>
            <p className="mobile-only">Bento mobile</p>
          </div>
          <div className="bento">
            <article className="card docmind">
              <p className="flag flag-lav">
                <span className="desktop-only">Flagship · RAG</span>
                <span className="mobile-only">RAG</span>
              </p>
              <h3>
                <a className="title-link" href={links.docmind} target="_blank" rel="noopener noreferrer">
                  DocMind
                  <span className="sr-only">, dépôt public, nouvel onglet</span>
                </a>
              </h3>
              <p className="desktop-only">
                Assistant documentaire IA : interrogez vos PDF et obtenez des réponses avec sources citées
                (fichier + page). Backend Java 21 / Spring Boot, front React, PostgreSQL + pgvector, traitement
                asynchrone RabbitMQ, JWT, tests et CI GitHub Actions, Docker Compose.
              </p>
              <p className="mobile-only">
                PDF → réponses sourcées. Java 21, Spring, React, pgvector, RabbitMQ, JWT, CI, Docker.
              </p>
              <ul className="tags" aria-label="Pile DocMind">
                <li className="tag desktop-only">Java 21</li>
                <li className="tag mobile-only">Java</li>
                <li className="tag desktop-only">Spring Boot</li>
                <li className="tag mobile-only">Spring</li>
                <li className="tag">React</li>
                <li className="tag desktop-only">pgvector</li>
                <li className="tag desktop-only">RabbitMQ</li>
                <li className="tag desktop-only">Docker</li>
              </ul>
              <div className="swatch" aria-hidden="true" />
            </article>

            <article className="card expire">
              <p className="flag flag-mint">Full-stack</p>
              <h3>ExpireTrack</h3>
              <p className="desktop-only">
                Gestionnaire d’abonnements avec rôles, API REST et authentification JWT.
              </p>
              <p className="mobile-only">Abonnements, rôles, API JWT.</p>
              <ul className="tags" aria-label="Pile ExpireTrack">
                <li className="tag">React</li>
                <li className="tag">Node</li>
                <li className="tag desktop-only">MySQL</li>
                <li className="tag">Prisma</li>
                <li className="tag desktop-only">JWT</li>
              </ul>
              <div className="swatch" aria-hidden="true" />
            </article>

            <article className="card plan">
              <p className="flag flag-peach">
                <span className="desktop-only">Académique 2025</span>
                <span className="mobile-only">2025</span>
              </p>
              <h3>Planifya</h3>
              <p className="desktop-only">
                Planification pour créateurs : calendrier, notifications, IA et abonnements Stripe.
              </p>
              <p className="mobile-only">MERN, Stripe, APIs IA.</p>
              <ul className="tags" aria-label="Pile Planifya">
                <li className="tag">MERN</li>
                <li className="tag">Stripe</li>
                <li className="tag desktop-only">OpenAI</li>
                <li className="tag desktop-only">Gemini</li>
              </ul>
              <div className="swatch" aria-hidden="true" />
            </article>

            <article className="card menstage desktop-only">
              <p className="flag flag-lav">Stage · Mars 2024</p>
              <h3>MENStage — Ministère de l’Éducation nationale, DSI</h3>
              <p>
                Co-développement d’une plateforme multi-rôles (admins, encadrants, stagiaires) :
                authentification, suivi de projets et gestion des absences. Stack React.js + Laravel.
              </p>
              <ul className="tags" aria-label="Pile MENStage">
                <li className="tag">React.js</li>
                <li className="tag">Laravel</li>
                <li className="tag">Multi-rôles</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="competences" aria-labelledby="skills-title">
          <div className="section-head">
            <h2 id="skills-title">Compétences</h2>
            <p className="desktop-only">
              Groupées par usage — les bases Kafka / Hadoop restent une exposition, pas une expertise.
            </p>
          </div>
          <div className="skills">
            <article className="skill desktop-only">
              <h3>Langages</h3>
              <p>Java, Python, JavaScript, PHP, C#, SQL</p>
            </article>
            <article className="skill">
              <h3>
                <span className="desktop-only">Backend & APIs</span>
                <span className="mobile-only">Backend</span>
              </h3>
              <p className="desktop-only">Spring Boot, Laravel, Node/Express, ASP.NET MVC, REST, JWT</p>
              <p className="mobile-only">Spring, Laravel, Node</p>
            </article>
            <article className="skill">
              <h3>Frontend</h3>
              <p className="desktop-only">React, Redux, Tailwind, Bootstrap</p>
              <p className="mobile-only">React, Tailwind</p>
            </article>
            <article className="skill desktop-only">
              <h3>Data & DevOps</h3>
              <p>PostgreSQL, MySQL, MongoDB, Docker, GitHub Actions, Selenium</p>
            </article>
            <article className="skill mobile-only">
              <h3>QA</h3>
              <p>Selenium, tests</p>
            </article>
            <article className="skill mobile-only">
              <h3>Ops</h3>
              <p>Docker, Actions</p>
            </article>
          </div>
        </section>

        <section className="section" id="parcours" aria-labelledby="path-title">
          <div className="section-head">
            <h2 id="path-title">Parcours</h2>
            <p>Formation et expériences, sans inventer de disponibilités.</p>
          </div>
          <div className="path">
            <article className="about">
              <h3>À propos</h3>
              <p>
                Je cherche un stage PFE en full-stack ou automatisation QA. J’aime les architectures
                claires, les tests utiles et les interfaces lisibles. Langues : arabe (natif), français
                (courant), anglais B1/B2.
              </p>
            </article>
            <article className="reperes">
              <h3>Repères</h3>
              <ol className="timeline">
                <li>
                  <time dateTime="2024">2024–2027</time>
                  <span>SUPMTI Rabat — Ingénierie des SI (en cours)</span>
                </li>
                <li>
                  <time dateTime="2022">2022–2024</time>
                  <span>OFPPT Salé — Technicienne spécialisée développement digital</span>
                </li>
                <li>
                  <time dateTime="2024-03">Mars 2024</time>
                  <span>Stage DSI MEN — co-dev MENStage</span>
                </li>
                <li>
                  <time dateTime="2026-05">Mai–Juil. 2026</time>
                  <span>T3-Shield / SensThings — ambassadrice régionale (ops/support, non-dev)</span>
                </li>
              </ol>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-bar">
          <div>
            <h2>
              <span className="desktop-only">Travaillons ensemble</span>
              <span className="mobile-only">Contact</span>
            </h2>
            <p className="desktop-only">
              Ouverte aux échanges pour un stage PFE full-stack ou QA automation au Maroc.
            </p>
            <p className="mobile-only">LinkedIn & GitHub publics.</p>
          </div>
          <div className="footer-actions">
            <a className="ghost" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
            <a className="ghost" href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
