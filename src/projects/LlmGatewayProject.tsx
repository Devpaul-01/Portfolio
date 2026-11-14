/**
 * LlmGatewayProject — §05 of the portfolio.
 *
 * Same pattern as AgentBrokerProject.tsx: a fragment that renders the
 * case-study sections in order. Section ids are all prefixed `llmgateway-`
 * because the LedgerRule scroll tracker depends on them, and the order here
 * must match llmGatewaySectionIds in content/sectionIds.ts.
 */
import LlmGatewayHero from "../sections/llmgateway/LlmGatewayHero";
import LlmGatewayProblem from "../sections/llmgateway/LlmGatewayProblem";
import LlmGatewayTour from "../sections/llmgateway/LlmGatewayTour";
import LlmGatewayArchitecture from "../sections/llmgateway/LlmGatewayArchitecture";
import LlmGatewayFailover from "../sections/llmgateway/LlmGatewayFailover";
import LlmGatewayStories from "../sections/llmgateway/LlmGatewayStories";
import LlmGatewayMeasured from "../sections/llmgateway/LlmGatewayMeasured";
import LlmGatewayTests from "../sections/llmgateway/LlmGatewayTests";
import LlmGatewayLimits from "../sections/llmgateway/LlmGatewayLimits";
import LlmGatewayClosing from "../sections/llmgateway/LlmGatewayClosing";

export default function LlmGatewayProject() {
  return (
    <>
      <LlmGatewayHero />
      <LlmGatewayProblem />
      <LlmGatewayTour />
      <LlmGatewayArchitecture />
      <LlmGatewayFailover />
      <LlmGatewayStories />
      <LlmGatewayMeasured />
      <LlmGatewayTests />
      <LlmGatewayLimits />
      <LlmGatewayClosing />
    </>
  );
}
