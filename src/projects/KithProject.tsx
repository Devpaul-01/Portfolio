import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import ProductModel from "../sections/ProductModel";
import Dashboard from "../sections/Dashboard";
import ProxyMembership from "../sections/ProxyMembership";
import Ledger from "../sections/Ledger";
import Tasks from "../sections/Tasks";
import Disputes from "../sections/Disputes";
import RecurringPools from "../sections/RecurringPools";
import EngineeringJudgment from "../sections/EngineeringJudgment";
import Measured from "../sections/Measured";
import Reflections from "../sections/Reflections";
import Reliability from "../sections/Reliability";
import Security from "../sections/Security";
import Architecture from "../sections/Architecture";
import Stack from "../sections/Stack";
import Numbers from "../sections/Numbers";
import NextImprovements from "../sections/NextImprovements";
import Closing from "../sections/Closing";

// Self-contained Kith project entry. Not a page root — Portfolio.tsx owns
// the page shell (LedgerRule, PortfolioHero, About, Skills, Contact) and
// renders this as one project block inside it. A second project (e.g.
// StudyHub) gets its own parallel file in this exact shape, with its own
// content file, added to Portfolio.tsx without touching this one.
export default function KithProject() {
  return (
    <>
      <Hero />
      <Problem />
      <ProductModel />
      <Dashboard />
      <ProxyMembership />
      <Ledger />
      <Tasks />
      <Disputes />
      <RecurringPools />
      <EngineeringJudgment />
      <Measured />
      <Reflections />
      <Reliability />
      <Security />
      <Architecture />
      <Stack />
      <Numbers />
      {/* "What I'd do next" reads as reflective engineering maturity once
          the strongest evidence has already landed — not as a disclaimer
          standing between the reader and the ledger/disputes/security
          sections. Moved from right after the hero (where it undercut
          everything that followed) to just before the close. */}
      <NextImprovements />
      <Closing />
    </>
  );
}
