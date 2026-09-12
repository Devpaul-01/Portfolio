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
  title: "Software Engineer — Backend Focus",
  location: "Oyo State, Nigeria",
  workPreference: "Remote (Nigeria-based)",
  level:
    "B.Sc. Computer Science (FUTA) — coursework permits full-time work.",
};

// -- links --------------------------------------------------------------

export const contact = {
  email: "oluwaseyiogunsola90@gmail.com",
  github: "https://github.com/Devpaul-01",
  linkedin: "https://www.linkedin.com/in/dev-paul-697727376/",
  // Resume — drop the actual PDF at public/resume.pdf (not src/assets/ —
  // public/ files are served at a stable direct URL, which a resume link
  // needs). The button below activates automatically once the file exists.
  // NOTE: re-upload the latest resume PDF here any time the resume content
  // changes — this path is a static file reference and will silently keep
  // serving whatever was last uploaded, even after the resume is updated.
  resumeHref: "/resume.pdf",
  resumeAvailable: true,
};

// -- about / intro --------------------------------------------------------

export const about = {
  eyebrow: "ABOUT",
  paragraphs: [
    "I'm a Computer Science undergraduate at the Federal University of Technology, Akure, with a class schedule light enough to support full-time work alongside my degree.",
    "What I do have is a habit of building things that are harder than they look. Kith, one of the two projects below, came out of a real situation in my own family \u2014 a monthly contribution for my grandmother's care, tracked by hand in a WhatsApp group \u2014 and turned into a full backend system with the kind of correctness and permission problems a real financial product has to solve. StudyHub, the other, is a peer-tutoring platform built around reputation as its actual currency, with the same attention to concurrency and failure handling. I built both entirely on my own, end to end.",
    "I'm looking for a full-time backend role where I can work on real correctness and concurrency problems \u2014 not just build features \u2014 and keep learning from engineers who've solved these problems at a scale I haven't yet.",
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
        "REST APIs",
        "WebSockets",
        "JWT / OAuth"
      ],
    },
    {
      role: "Data & Async",
      items: [
        "PostgreSQL (Supabase)",
        "MySQL / SQLite",
        "Redis",
        "BullMQ",
        "SQLAlchemy / Alembic",
      ],
    },
    {
      role: "Frontend",
      items: ["React", "TypeScript", "React Native / Expo", "Tailwind CSS", "Vite"],
    },
    {
      role: "Testing",
      items: ["Jest", "pytest", "Integration testing", "Concurrent/multi-actor test design"],
    },
    {
      role: "Infrastructure & Services",
      items: [
        "Docker",
        "Git / GitHub",
        "Sentry",
        "Firebase Cloud Messaging",
        "Resend",
        "Multi-provider AI abstraction",
      ],
    },
  ],
};

// -- portfolio hero (distinct from the Kith project's own hero) ------------

export const portfolioHero = {
  eyebrow: "PORTFOLIO",
  greeting: "Ogunsola Toluwase Paul",
  handleNote: "GitHub: DevPaul",
  headline: "Backend-focused software engineer, building for real, available full-time.",
  subhead:
    "I design and build backend systems \u2014 APIs, data integrity, background processing, permissions \u2014 with the kind of care a real product needs. Below are Kith and StudyHub, two independently built, production-grade systems that show how I think about correctness and failure.",
};

// -- closing / contact section -------------------------------------------

export const closingContact = {
  eyebrow: "GET IN TOUCH",
  heading:
    "I'm looking for a full-time software engineering role \u2014 ideally one where I can work on backend systems with real concurrency, data-integrity, and reliability requirements.",
  body: "If that sounds like your team, let's talk.",
};
