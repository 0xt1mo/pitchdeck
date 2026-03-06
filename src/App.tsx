import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { TitleSlide } from './slides/TitleSlide';
import { TeamSlide } from './slides/TeamSlide';
import { TableOfContentsSlide } from './slides/TableOfContentsSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { ParadigmOverviewSlide } from './slides/ParadigmOverviewSlide';
import { ConsumerGTMSlide } from './slides/ConsumerGTMSlide';
import { IntentsSlide } from './slides/IntentsSlide';
import { MarketplaceSlide } from './slides/MarketplaceSlide';
import { PaymentsSlide } from './slides/PaymentsSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { SecuritySlide } from './slides/SecuritySlide';
import { DemoSlide } from './slides/DemoSlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { ComparisonSlide } from './slides/ComparisonSlide';
import { CommunitySlide } from './slides/CommunitySlide';
import { TokenSlide } from './slides/TokenSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { WalletSlide } from './slides/WalletSlide';
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
import { KernelDividerSlide, SecurityDividerSlide, BlockchainDividerSlide, TokenDividerSlide } from './slides/SectionDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { BlockchainArchSlide } from './slides/BlockchainArchSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // Introduction
  TitleSlide,
  TeamSlide,
  TableOfContentsSlide,
  ProblemSlide,
  SolutionSlide,
  // How It Works
  ParadigmOverviewSlide,
  WalletSlide,
  // Product
  ConsumerGTMSlide,
  MarketplaceSlide,
  IntentsSlide,
  DemoSlide,
  // Kernel
  KernelDividerSlide,
  AstridSlide,
  AstridComparisonSlide,
  AstridUseCasesSlide,
  // Security
  SecurityDividerSlide,
  SecuritySlide,
  SecurityNetworkSlide,
  // L1 Blockchain
  BlockchainDividerSlide,
  BlockchainArchSlide,
  PaymentsSlide,
  ProtocolSlide,
  ComparisonSlide,
  // Unicity Token
  TokenDividerSlide,
  TokenSlide,
  CommunitySlide,
  // Close
  ResourcesSlide,
  ThankYouChatSlide,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  if (isMobile) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center px-8 bg-[#060606]">
        <img src="/UnicityLogo.svg" alt="Unicity" className="h-8 mb-6 opacity-60" />
        <h1
          className="text-[#fefefe] text-2xl text-center leading-tight"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          DESKTOP <span className="text-orange-400">ONLY</span>
        </h1>
        <p
          className="text-[#fefefe]/50 text-xs text-center mt-3 max-w-xs"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          This deck is optimized for desktop. Please open it on a larger screen.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative">
      <CurrentSlideComponent onNext={() => goToSlide(currentSlide + 1)} goToSlide={goToSlide} />
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
