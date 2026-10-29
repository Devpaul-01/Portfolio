/**
 * AgentBrokerProject — §01 of the portfolio.
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
import AgentBrokerAtomicity from "../sections/agentbroker/AgentBrokerAtomicity";
import AgentBrokerMechanisms from "../sections/agentbroker/AgentBrokerMechanisms";
import AgentBrokerMeasured from "../sections/agentbroker/AgentBrokerMeasured";
import AgentBrokerTwoLanguages from "../sections/agentbroker/AgentBrokerTwoLanguages";

export default function AgentBrokerProject() {
  return (
    <>
      <AgentBrokerDivider />
      <AgentBrokerHero />
      <AgentBrokerProblem />
      <AgentBrokerAtomicity />
      <AgentBrokerArchitecture />
      <AgentBrokerMechanisms />
      <AgentBrokerStories />
      <AgentBrokerMeasured />
      <AgentBrokerTwoLanguages />
      <AgentBrokerTests />
      <AgentBrokerLimits />
      <AgentBrokerClosing />
    </>
  );
}
