// Portfolio-level content: identity, contact, skills, and the personal
// engineering-reflection layer that sits around the Kith project entry.
// Kept deliberately separate from kithContent.ts — this file describes
// the person; kithContent.ts describes the project. When a second project
// (StudyHub) is added later, it gets its own content file in this same
// shape; this file does not need to change to support that.

// -- identity ---------------------------------------------------------

export const identity = {
  fullName: "Ogunsola Toluwase Paul",
  handle: "DevPaul",
  title: "Software Engineer — Backend & Distributed Systems",
  location: "Oyo State, Nigeria",
  workPreference: "100% Remote (Global Contractor Framework / Deel)",
  level:
    "Open to Global Remote Roles & Contractor Contracts (Full-Time Availability)",
};

// -- links --------------------------------------------------------------

export const contact = {
  email: "oluwaseyiogunsola90@gmail.com",
  github: "https://github.com/Devpaul-01",
  linkedin: "https://www.linkedin.com/in/dev-paul-697727376/",
  // Resume — drop the actual PDF at public/resume.pdf (not src/assets/ —
  // public/ files are served at a stable direct URL, which a resume link
  // needs). The button below activates automatically once the file exists.
  resumeHref: "/resume.pdf",
  resumeAvailable: true,
};

// -- about / intro --------------------------------------------------------

export const about = {
  eyebrow: "ABOUT",
  paragraphs: [
    "I am a backend software engineer specializing in Node.js, TypeScript, and Python. I focus on designing and deploying fault-tolerant backend infrastructures where relational data correctness under heavy concurrency matters far more than simple CRUD functionality.",
    "I build software designed around real-world distributed system failure modes. Kith, the project featured below, grew from a manual, error-prone financial tracking challenge within my own extended family into a fully production-ready, multi-tenant ledger architecture. I designed, engineered, and deployed the entire ecosystem independently from the data layer up.",
    "Operating globally as an autonomous independent contractor, I am looking to integrate into distributed product teams handling complex data integrity, multi-provider API orchestration, and background processing systems. I offer plug-and-play legal flexibility via contractor frameworks with zero operational overhead for your company.",
  ],
};

// -- skills ---------------------------------------------------------------
// Curated, not exhaustive — grouped to support the backend-oriented
// positioning and weighted toward what Kith itself actually demonstrates,
// per the instruction not to turn this into a technology wall.

export const skills = {
  eyebrow: "TECHNICAL SKILLS",
  heading: "What I build with.",
  groups: [
    {
      role: "Backend",
      items: [
        "Node.js",
        "Express",
        "Flask",
        "REST API Design",
        "WebSockets",
        "JWT / OAuth Integration"
      ],
    },
    {
      role: "Data & Async",
      items: [
        "PostgreSQL",
        "Redis Distributed Locking",
        "BullMQ Cluster Scheduling",
        "SQLAlchemy / Alembic",
        "Transactional Stored Procedures (RPCs)",
      ],
    },
    {
      role: "Frontend",
      items: ["React", "TypeScript", "React Native / Expo", "Tailwind CSS", "Vite"],
    },
    {
      role: "Testing",
      items: ["Jest", "Pytest", "Multi-Actor Integration Testing", "Concurrent Race-Condition Simulation"],
    },
    {
      role: "Infrastructure & Services",
      items: [
        "Docker",
        "GitHub Actions CI/CD",
        "Sentry Error Telemetry",
        "Supabase",
        "Railway",
        "Vercel",
        "AWS Components",
      ],
    },
  ],
};

// -- portfolio hero (distinct from the Kith project's own hero) ------------

export const portfolioHero = {
  eyebrow: "PORTFOLIO",
  greeting: "Ogunsola Toluwase Paul",
  handleNote: "GitHub: DevPaul",
  headline: "Backend software engineer building resilient, high-concurrency infrastructure.",
  subhead:
    "I design and deploy backend systems\u2014focusing on database transactional atomicity, distributed safety, async task processing, and robust isolation filters. Below is Kith, the project I want you to inspect first.",
};

// -- closing / contact section -------------------------------------------

export const closingContact = {
  eyebrow: "GET IN TOUCH",
  heading:
    "Looking for an autonomous backend engineer to strengthen your distributed product team?",
  body: "If your engineering roadmap demands clean database architecture, transactional atomicity under concurrent requests, and background task pipelines that degrade safely instead of breaking quietly, let's connect.",
};
