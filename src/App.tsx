import { useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { TitleSlide } from './slides/TitleSlide';
import { IntroSlide } from './slides/IntroSlide';
import { TeamSlide } from './slides/TeamSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { ParadigmOverviewSlide } from './slides/ParadigmOverviewSlide';
import { ConsumerGTMSlide } from './slides/ConsumerGTMSlide';
import { IntentsSlide } from './slides/IntentsSlide';
import { MarketSlide } from './slides/MarketSlide';
import { RaiseSlide } from './slides/RaiseSlide';
import { ThankYouSlide } from './slides/ThankYouSlide';
import { AppendixSlide } from './slides/AppendixSlide';
import { PaymentsSlide } from './slides/PaymentsSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { ParadigmSlide } from './slides/ParadigmSlide';
import { SecuritySlide } from './slides/SecuritySlide';
import { DemoSlide } from './slides/DemoSlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { CommunitySlide } from './slides/CommunitySlide';
import { TokenSlide } from './slides/TokenSlide';
import { KbbotSlide } from './slides/KbbotSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { WalletSlide } from './slides/WalletSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  TitleSlide,
  IntroSlide,
  TeamSlide,
  MarketSlide,
  ProblemSlide,
  SolutionSlide,
  ParadigmOverviewSlide,
  WalletSlide,
  ConsumerGTMSlide,
  IntentsSlide,
  DemoSlide,
  KbbotSlide,
  TokenSlide,
  CommunitySlide,
  RaiseSlide,
  ThankYouSlide,
  ThankYouChatSlide,
  AppendixSlide,
  ProtocolSlide,
  PaymentsSlide,
  SecuritySlide,
  ParadigmSlide,
  ResourcesSlide,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-full w-full relative">
      <CurrentSlideComponent onNext={() => goToSlide(currentSlide + 1)} />
      {slides.length > 1 && (
        <SlideNavigation
          current={currentSlide}
          total={slides.length}
          onNavigate={goToSlide}
        />
      )}
    </div>
  );
}
