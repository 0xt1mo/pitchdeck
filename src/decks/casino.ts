// Deck config — casino (casino-v2 branch). Casino slides under src/slides/casino/;
// reuses shared sales/ slides, with casino-local copies of the two divergent ones
// (SalesContact/SalesAbout) kept under casino/ to stay faithful to the casino branch.
import { CasinoTitleSlide } from '../slides/casino/CasinoTitleSlide';
import { CasinoCoverSlide } from '../slides/casino/CasinoCoverSlide';
import { CasinoWhyNowSlide } from '../slides/casino/CasinoWhyNowSlide';
import { CasinoEngagementSlide } from '../slides/casino/CasinoEngagementSlide';
import { CasinoCacSlide } from '../slides/casino/CasinoCacSlide';
import { CasinoOnboardingSlide } from '../slides/casino/CasinoOnboardingSlide';
import { CasinoCostSlide } from '../slides/casino/CasinoCostSlide';
import { CasinoRetentionSlide } from '../slides/casino/CasinoRetentionSlide';
import { CasinoIntroducingUnicitySlide } from '../slides/casino/CasinoIntroducingUnicitySlide';
import { CasinoAutonomyStackSlide } from '../slides/casino/CasinoAutonomyStackSlide';
import { CasinoDashboardSlide } from '../slides/casino/CasinoDashboardSlide';
import { CasinoPlatformSlide } from '../slides/casino/CasinoPlatformSlide';
import { CasinoAskSlide } from '../slides/casino/CasinoAskSlide';
import { CasinoTeamSlide } from '../slides/casino/CasinoTeamSlide';
// casino-local divergent copies of two sales slides
import { SalesContactSlide as CasinoSalesContactSlide } from '../slides/casino/SalesContactSlide';
import { SalesAboutSlide as CasinoSalesAboutSlide } from '../slides/casino/SalesAboutSlide';
// shared sales slides (identical to salesdeck)
import { SalesIntroSlide } from '../slides/sales/SalesIntroSlide';
import { SalesAgentsComingSlide } from '../slides/sales/SalesAgentsComingSlide';
import { SalesPilotPurgatorySlide } from '../slides/sales/SalesPilotPurgatorySlide';
import { SalesOverviewSlide } from '../slides/sales/SalesOverviewSlide';
import { SalesAgentHostSlide } from '../slides/sales/SalesAgentHostSlide';
import { SalesInterceptFabricSlide } from '../slides/sales/SalesInterceptFabricSlide';
import { SalesAgentSphereSlide } from '../slides/sales/SalesAgentSphereSlide';
import { SalesDeploymentSlide } from '../slides/sales/SalesDeploymentSlide';

export const casinoDeck = [
  CasinoTitleSlide,
  CasinoCoverSlide,
  CasinoWhyNowSlide,
  CasinoEngagementSlide,
  CasinoCacSlide,
  CasinoOnboardingSlide,
  CasinoCostSlide,
  CasinoRetentionSlide,
  CasinoIntroducingUnicitySlide,
  CasinoAutonomyStackSlide,
  CasinoDashboardSlide,
  CasinoPlatformSlide,
  CasinoAskSlide,
  CasinoTeamSlide,
  CasinoSalesContactSlide,
  SalesIntroSlide,
  SalesAgentsComingSlide,
  SalesPilotPurgatorySlide,
  SalesOverviewSlide,
  SalesAgentHostSlide,
  SalesInterceptFabricSlide,
  SalesAgentSphereSlide,
  SalesDeploymentSlide,
  CasinoSalesAboutSlide,
];
