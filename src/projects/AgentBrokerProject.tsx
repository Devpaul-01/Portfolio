/**
 * AgentBrokerProject — §03 of the portfolio.
 *
 * Same pattern as FounderSalesProject.tsx: a fragment that renders the
 * case-study sections in order. Section ids are all prefixed `agentbroker-`
 * because the LedgerRule scroll tracker depends on them.
 */
import AgentBrokerDivider from "../sections/agentbroker/AgentBrokerDivider";
import AgentBrokerHero from "../sections/agentbroker/AgentBrokerHero";
import AgentBrokerProblem from "../sections/agentbroker/AgentBrokerProblem";
import AgentBrokerArchitecture from "../sections/agentbroker/AgentBrokerArchitecture";
import AgentBrokerStories from "../sections/agentbroker/AgentBrokerStories";
import AgentBrokerTests from "../sections/agentbroker/AgentBrokerTests";
import AgentBrokerLimits from "../sections/agentbroker/AgentBrokerLimits";
import AgentBrokerClosing from "../sections/agentbroker/AgentBrokerClosing";

export default function AgentBrokerProject() {
  return (
    <>
      <AgentBrokerDivider />
      <AgentBrokerHero />
      <AgentBrokerProblem />
      <AgentBrokerArchitecture />
      <AgentBrokerStories />
      <AgentBrokerTests />
      <AgentBrokerLimits />
      <AgentBrokerClosing />
    </>
  );
}
