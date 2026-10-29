# Portfolio — Ogunsola Toluwase Paul (DevPaul)

Source for my portfolio site. Four engineering case studies, each written around the hard part rather than the feature list.

| # | Project | What is hard about it | Repo |
|---|---------|-----------------------|------|
| 1 | **Agent Broker** | Keeping a shared budget, delegation limit and circuit breaker correct across independent processes, in two languages, using atomic Redis Lua scripts. Published on npm. | [agent-broker](https://github.com/Devpaul-01/agent-broker) |
| 2 | **Kith** | A multi-tenant family ledger with append-only entries, idempotent writes and atomic disputes. | [Kith](https://github.com/Devpaul-01/Kith) |
| 3 | **StudyHub** | Multi-worker refactor and classified AI failover. | see site |
| 4 | **FounderSales** | Cost-gated AI pipeline and distributed failover. | see site |

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check is separate: npx tsc --noEmit -p tsconfig.app.json
```

## How it is organised

- `src/content/*Content.ts` holds all copy, numbers and links. Section components are presentational.
- `src/sections/<project>/` has one component per case-study section; `src/projects/` composes them.
- `src/content/sectionIds.ts` drives the scroll-tracking nav.
- Every figure shown for Agent Broker is checked against the repo (tests, ADRs, CI, measurement reports) and links to its source. Where something is a local benchmark rather than a production number, the page says so.

Built with React, TypeScript, Vite and Tailwind. Deployed on Vercel.
