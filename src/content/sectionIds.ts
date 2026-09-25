// Section IDs the fixed LedgerRule header tracks while scrolling, in document
// order. Previously one ~60-entry array in Portfolio.tsx; split here so each
// route only tracks the sections it actually renders.
//
// IDs and labels are copied unchanged from the original array. When a section
// is added to a project, add it here in the same position it renders.

export interface SectionEntry {
  id: string;
  label: string;
}

export const homeSectionIds: SectionEntry[] = [
  { id: "portfolio-hero", label: "§00 PROFILE" },
  { id: "about", label: "§00 ABOUT" },
  { id: "skills", label: "§00 SKILLS" },
  { id: "ownership", label: "§00 OWNERSHIP" },
  { id: "projects", label: "§00 PROJECTS" },
  { id: "contact", label: "§00 CONTACT" },
];

export const kithSectionIds: SectionEntry[] = [
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
];

export const studyHubSectionIds: SectionEntry[] = [
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
];

export const founderSalesSectionIds: SectionEntry[] = [
  { id: "foundersales-hero", label: "§03 FOUNDERSALES" },
  { id: "foundersales-problem", label: "§03 THE PROBLEM" },
  { id: "foundersales-model", label: "§03 THE MODEL" },
  { id: "foundersales-surface", label: "§03 THE SURFACE" },
  { id: "foundersales-ai", label: "§03 AI RELIABILITY" },
  { id: "foundersales-redis", label: "§03 DISTRIBUTED STATE" },
  { id: "foundersales-jobs", label: "§03 BACKGROUND JOBS" },
  { id: "foundersales-costgate", label: "§03 COST GATING" },
  { id: "foundersales-practice", label: "§03 PRACTICE ENGINE" },
  { id: "foundersales-metrics", label: "§03 METRICS VS INSIGHTS" },
  { id: "foundersales-data", label: "§03 DATA ARCHITECTURE" },
  { id: "foundersales-bugs", label: "§03 BUGS I FOUND" },
  { id: "foundersales-reliability", label: "§03 RELIABILITY" },
  { id: "foundersales-architecture", label: "§03 ARCHITECTURE" },
  { id: "foundersales-gaps", label: "§03 HONEST GAPS" },
  { id: "foundersales-stack", label: "§03 STACK" },
  { id: "foundersales-numbers", label: "§03 NUMBERS" },
  { id: "foundersales-closing", label: "§03 SOURCE" },
];
