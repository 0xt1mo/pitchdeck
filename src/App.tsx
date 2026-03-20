import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { TitleSlide } from './slides/TitleSlide';
import { TeamSlide } from './slides/TeamSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { SecuritySlide } from './slides/SecuritySlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { ParamarketSlide } from './slides/ParamarketSlide';
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
import { KernelDividerSlide, SecurityDividerSlide } from './slides/SectionDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { AleriaImpactSlide } from './slides/AleriaImpactSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  TitleSlide,
  TeamSlide,
  SolutionSlide,
  KernelDividerSlide,
  AstridSlide,
  AstridComparisonSlide,
  AstridUseCasesSlide,
  AleriaImpactSlide,
  SecurityDividerSlide,
  SecuritySlide,
  SecurityNetworkSlide,
  ParamarketSlide,
  ResourcesSlide,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!unlocked) return;
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
  }, [unlocked]);

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
      <CurrentSlideComponent onNext={() => { if (currentSlide === 0) setUnlocked(true); goToSlide(currentSlide + 1); }} goToSlide={goToSlide} key={currentSlide} />
      {unlocked && currentSlide > 0 && (
        <div
          className="fixed bottom-5 left-6 sm:left-10 lg:left-16 z-[60] text-[#fefefe]/25 text-[11px] font-medium select-none pointer-events-none"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {currentSlide} / {slides.length - 1}
        </div>
      )}
      {unlocked && slides.length > 1 && (
        <SlideNavigation
          current={currentSlide}
          total={slides.length}
          onNavigate={goToSlide}
        />
      )}
    </div>
  );
}
