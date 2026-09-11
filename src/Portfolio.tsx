import LedgerRule from "./components/LedgerRule";
import PortfolioHero from "./sections/PortfolioHero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import OwnershipAndMotivation from "./sections/OwnershipAndMotivation";
import KithProject from "./projects/KithProject";
import StudyHubProject from "./projects/StudyHubProject";
import Contact from "./sections/Contact";
import { contact, identity } from "./content/portfolioContent";

// Section IDs the fixed LedgerRule header tracks while scrolling, in
// document order. Portfolio-shell sections first, then every section
// inside the current project block(s). When a second project is added,
// its own section IDs get appended here in the same pattern — nothing
// about the shell sections above needs to change.
const sectionIds = [
  { id: "portfolio-hero", label: "§00 PROFILE" },
  { id: "about", label: "§00 ABOUT" },
  { id: "skills", label: "§00 SKILLS" },
  { id: "ownership", label: "§00 OWNERSHIP" },
  // -- Kith project block --
  { id: "hero", label: "§01 KITH" },
  { id: "problem", label: "§01 THE PROBLEM" },
  { id: "model", label: "§01 THE MODEL" },
  { id: "dashboard", label: "§01 PRODUCT" },
  { id: "proxy", label: "§01 PROXY MEMBERSHIP" },
  { id: "next-improvements", label: "§01 WHAT'S NEXT" },
  { id: "ledger", label: "§01 THE LEDGER" },
  { id: "tasks", label: "§01 TASKS" },
  { id: "disputes", label: "§01 DISPUTES" },
  { id: "pools", label: "§01 RECURRING POOLS" },
  { id: "judgment", label: "§01 ENGINEERING JUDGMENT" },
  { id: "reflections", label: "§01 REFLECTIONS" },
  { id: "reliability", label: "§01 RELIABILITY" },
  { id: "security", label: "§01 SECURITY" },
  { id: "architecture", label: "§01 ARCHITECTURE" },
  { id: "stack", label: "§01 STACK" },
  { id: "numbers", label: "§01 NUMBERS" },
  { id: "closing", label: "§01 SOURCE" },
  // -- StudyHub project block --
  { id: "studyhub-hero", label: "§02 STUDYHUB" },
  { id: "studyhub-problem", label: "§02 THE PROBLEM" },
  { id: "studyhub-model", label: "§02 THE MODEL" },
  { id: "studyhub-domains", label: "§02 THE SURFACE" },
  { id: "studyhub-matching", label: "§02 MATCHING" },
  { id: "studyhub-social", label: "§02 SOCIAL GRAPH" },
  { id: "studyhub-threads", label: "§02 THREADS" },
  { id: "studyhub-homework", label: "§02 HOMEWORK" },
  { id: "studyhub-ai", label: "§02 LEARNORA (AI)" },
  { id: "studyhub-gamification", label: "§02 REPUTATION" },
  { id: "studyhub-notifications", label: "§02 NOTIFICATIONS" },
  { id: "studyhub-reliability", label: "§02 RELIABILITY" },
  { id: "studyhub-security", label: "§02 SECURITY" },
  { id: "studyhub-architecture", label: "§02 ARCHITECTURE" },
  { id: "studyhub-scaling", label: "§02 SCALING REFACTOR" },
  { id: "studyhub-honest-gaps", label: "§02 HONEST GAPS" },
  { id: "studyhub-stack", label: "§02 STACK" },
  { id: "studyhub-numbers", label: "§02 NUMBERS" },
  { id: "studyhub-closing", label: "§02 SOURCE" },
  // -- shell close --
  { id: "contact", label: "§00 CONTACT" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <LedgerRule
        sectionIds={sectionIds}
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
        <KithProject />
        <StudyHubProject />
        <Contact />
      </main>
    </div>
  );
}
