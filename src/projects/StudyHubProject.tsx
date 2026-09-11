import StudyHubDivider from "../sections/studyhub/StudyHubDivider";
import StudyHubHero from "../sections/studyhub/StudyHubHero";
import StudyHubProblem from "../sections/studyhub/StudyHubProblem";
import StudyHubProductModel from "../sections/studyhub/StudyHubProductModel";
import StudyHubDomains from "../sections/studyhub/StudyHubDomains";
import StudyHubMatching from "../sections/studyhub/StudyHubMatching";
import StudyHubSocialGraph from "../sections/studyhub/StudyHubSocialGraph";
import StudyHubThreads from "../sections/studyhub/StudyHubThreads";
import StudyHubHomework from "../sections/studyhub/StudyHubHomework";
import StudyHubAI from "../sections/studyhub/StudyHubAI";
import StudyHubGamification from "../sections/studyhub/StudyHubGamification";
import StudyHubNotifications from "../sections/studyhub/StudyHubNotifications";
import StudyHubReliability from "../sections/studyhub/StudyHubReliability";
import StudyHubSecurity from "../sections/studyhub/StudyHubSecurity";
import StudyHubArchitecture from "../sections/studyhub/StudyHubArchitecture";
import StudyHubScaling from "../sections/studyhub/StudyHubScaling";
import StudyHubHonestGaps from "../sections/studyhub/StudyHubHonestGaps";
import StudyHubStack from "../sections/studyhub/StudyHubStack";
import StudyHubNumbers from "../sections/studyhub/StudyHubNumbers";
import StudyHubClosing from "../sections/studyhub/StudyHubClosing";

// Self-contained StudyHub project entry, in the exact same shape as
// KithProject.tsx: a divider marking the seam, then the full project arc.
// Sits directly below KithProject in Portfolio.tsx. All copy sourced from
// studyHubContent.ts, which is itself sourced entirely from the provided
// StudyHub documentation. Kept in its own file/folder (sections/studyhub/)
// so this project can be split into its own route later without touching
// Kith's files or vice versa.
export default function StudyHubProject() {
  return (
    <>
      <StudyHubDivider />
      <StudyHubHero />
      <StudyHubProblem />
      <StudyHubProductModel />
      <StudyHubDomains />
      <StudyHubMatching />
      <StudyHubSocialGraph />
      <StudyHubThreads />
      <StudyHubHomework />
      <StudyHubAI />
      <StudyHubGamification />
      <StudyHubNotifications />
      <StudyHubReliability />
      <StudyHubSecurity />
      <StudyHubArchitecture />
      <StudyHubScaling />
      <StudyHubHonestGaps />
      <StudyHubStack />
      <StudyHubNumbers />
      <StudyHubClosing />
    </>
  );
}
