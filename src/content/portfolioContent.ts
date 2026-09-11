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
  workPreference: "Remote-first, open to relocation",
  level:
    "Final-year Computer Science undergraduate (FUTA) — first professional role search.",
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
    "I'm a Computer Science undergraduate at the Federal University of Technology, Akure, currently in my third year, with no professional software engineering experience yet \u2014 this is my first real attempt at getting into the field.",
    "What I do have is a habit of building things that are harder than they look. Kith, the project below, came out of a real situation in my own family \u2014 a monthly contribution for my grandmother's care, tracked by hand in a WhatsApp group \u2014 and turned into a full backend system with the kind of correctness and permission problems a real financial product has to solve. I built it entirely on my own, end to end.",
    "I'm looking for an internship or entry-level role where I can work on real correctness and concurrency problems \u2014 not just build features \u2014 and keep learning from engineers who've solved these problems at a scale I haven't yet.",
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
  headline: "Backend-focused software engineer, early in my career, building for real.",
  subhead:
    "I design and build backend systems \u2014 APIs, data integrity, background processing, permissions \u2014 with the kind of care a real product needs. Below is Kith, the project I want you to look at first.",
};

// -- closing / contact section -------------------------------------------

export const closingContact = {
  eyebrow: "GET IN TOUCH",
  heading:
    "I'm looking for my first software engineering role \u2014 ideally one where I can work on backend systems with real concurrency, data-integrity, and reliability requirements.",
  body: "If that sounds like your team, let's talk.",
};
