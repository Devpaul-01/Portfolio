/**
 * FounderSalesProject — §03 of the portfolio.
 *
 * Mirrors StudyHubProject.tsx: a fragment that renders the case-study
 * sections in order. Section ids are all prefixed `foundersales-` because
 * the LedgerRule scroll tracker in Portfolio.tsx depends on them.
 *
 * No live demo exists, so no section renders a "Live demo" button.
 */
import FounderSalesDivider from "../sections/foundersales/FounderSalesDivider";
import FounderSalesHero from "../sections/foundersales/FounderSalesHero";
import FounderSalesProblem from "../sections/foundersales/FounderSalesProblem";
import FounderSalesProductModel from "../sections/foundersales/FounderSalesProductModel";
import FounderSalesSurface from "../sections/foundersales/FounderSalesSurface";
import FounderSalesAIReliability from "../sections/foundersales/FounderSalesAIReliability";
import FounderSalesDistributedState from "../sections/foundersales/FounderSalesDistributedState";
import FounderSalesBackgroundJobs from "../sections/foundersales/FounderSalesBackgroundJobs";
import FounderSalesCostGating from "../sections/foundersales/FounderSalesCostGating";
import FounderSalesPractice from "../sections/foundersales/FounderSalesPractice";
import FounderSalesMetricsVsInsights from "../sections/foundersales/FounderSalesMetricsVsInsights";
import FounderSalesDataArchitecture from "../sections/foundersales/FounderSalesDataArchitecture";
import FounderSalesBugStories from "../sections/foundersales/FounderSalesBugStories";
import FounderSalesReliability from "../sections/foundersales/FounderSalesReliability";
import FounderSalesArchitecture from "../sections/foundersales/FounderSalesArchitecture";
import FounderSalesHonestGaps from "../sections/foundersales/FounderSalesHonestGaps";
import FounderSalesStack from "../sections/foundersales/FounderSalesStack";
import FounderSalesNumbers from "../sections/foundersales/FounderSalesNumbers";
import FounderSalesClosing from "../sections/foundersales/FounderSalesClosing";

export default function FounderSalesProject() {
  return (
    <>
      <FounderSalesDivider />
      <FounderSalesHero />
      <FounderSalesProblem />
      <FounderSalesProductModel />
      <FounderSalesSurface />
      <FounderSalesAIReliability />
      <FounderSalesDistributedState />
      <FounderSalesBackgroundJobs />
      <FounderSalesCostGating />
      <FounderSalesPractice />
      <FounderSalesMetricsVsInsights />
      <FounderSalesDataArchitecture />
      <FounderSalesBugStories />
      <FounderSalesReliability />
      <FounderSalesArchitecture />
      <FounderSalesHonestGaps />
      <FounderSalesStack />
      <FounderSalesNumbers />
      <FounderSalesClosing />
    </>
  );
}
