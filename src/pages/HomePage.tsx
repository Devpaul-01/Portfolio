import About from "../sections/About";
import Skills from "../sections/Skills";
import OwnershipAndMotivation from "../sections/OwnershipAndMotivation";
import PortfolioHero from "../sections/PortfolioHero";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import LedgerRule from "../components/LedgerRule";
import { contact, identity } from "../content/portfolioContent";
import { homeSectionIds } from "../content/sectionIds";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Homepage: the portfolio shell plus a Projects section (three cards) in
// place of the three fully-expanded project fragments that used to render
// inline here. Each fragment now lives at its own route via ProjectPage.
export default function HomePage() {
  useDocumentTitle(`${identity.fullName} — ${identity.title}`);

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <LedgerRule
        sectionIds={homeSectionIds}
        githubHref={contact.github}
        statementLine={{
          primary: identity.handle.toUpperCase(),
          secondary: identity.title.toUpperCase(),
          tertiary: identity.location.toUpperCase(),
        }}
      />
      <main>
        <PortfolioHero />
        <About />
        <Skills />
        <OwnershipAndMotivation />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
