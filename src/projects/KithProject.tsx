import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import ProductModel from "../sections/ProductModel";
import Dashboard from "../sections/Dashboard";
import ProxyMembership from "../sections/ProxyMembership";
import NextImprovements from "../sections/NextImprovements";
import Ledger from "../sections/Ledger";
import Tasks from "../sections/Tasks";
import Disputes from "../sections/Disputes";
import RecurringPools from "../sections/RecurringPools";
import EngineeringJudgment from "../sections/EngineeringJudgment";
import Reflections from "../sections/Reflections";
import Reliability from "../sections/Reliability";
import Security from "../sections/Security";
import Architecture from "../sections/Architecture";
import Stack from "../sections/Stack";
import Numbers from "../sections/Numbers";
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
      <NextImprovements />
      <Ledger />
      <Tasks />
      <Disputes />
      <RecurringPools />
      <EngineeringJudgment />
      <Reflections />
      <Reliability />
      <Security />
      <Architecture />
      <Stack />
      <Numbers />
      <Closing />
    </>
  );
}
