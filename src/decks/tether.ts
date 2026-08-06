// Deck config — tether. Active 28-slide sequence isolated under src/slides/tether/.
// Multi-export files: SectionDividers (4 dividers), AxisTradeoffSlides (Throughput/Privacy).
import { AgenticDACSlide } from '../slides/tether/AgenticDACSlide';
import { AgentsSlide } from '../slides/tether/AgentsSlide';
import { AtomicSwapsSlide } from '../slides/tether/AtomicSwapsSlide';
import { BearerObjectSlide } from '../slides/tether/BearerObjectSlide';
import { ClobComparisonSlide } from '../slides/tether/ClobComparisonSlide';
import { CompetitionSlide } from '../slides/tether/CompetitionSlide';
import { ComplianceSlide } from '../slides/tether/ComplianceSlide';
import { CompliantByConstructionSlide } from '../slides/tether/CompliantByConstructionSlide';
import { CoreOperationSlide } from '../slides/tether/CoreOperationSlide';
import { CoverSlide } from '../slides/tether/CoverSlide';
import { DemoAgendaSlide } from '../slides/tether/DemoAgendaSlide';
import { MonolithSlide } from '../slides/tether/MonolithSlide';
import { NoBridgeRiskSlide } from '../slides/tether/NoBridgeRiskSlide';
import { ProgrammableTokensSlide } from '../slides/tether/ProgrammableTokensSlide';
import { ProofPapersSlide } from '../slides/tether/ProofPapersSlide';
import { ProtocolSlide } from '../slides/tether/ProtocolSlide';
import { ResourcesSlide } from '../slides/tether/ResourcesSlide';
import { SettlementSlide } from '../slides/tether/SettlementSlide';
import { SharedLedgerSlide } from '../slides/tether/SharedLedgerSlide';
import { StateOfArtSlide } from '../slides/tether/StateOfArtSlide';
import { ThankYouChatSlide } from '../slides/tether/ThankYouChatSlide';
import { TokenObjectSlide } from '../slides/tether/TokenObjectSlide';
import { TradeoffsDivider, AtomicityProblemDivider, MathWorthItDivider, NewFinancialSystemDivider } from '../slides/tether/SectionDividers';
import { ThroughputSlide, PrivacySlide } from '../slides/tether/AxisTradeoffSlides';

export const tetherDeck = [
  DemoAgendaSlide,
  CoverSlide,
  SharedLedgerSlide,
  StateOfArtSlide,
  BearerObjectSlide,
  ProgrammableTokensSlide,
  AgentsSlide,
  MonolithSlide,
  CompetitionSlide,
  TokenObjectSlide,
  TradeoffsDivider,
  SettlementSlide,
  ThroughputSlide,
  ComplianceSlide,
  CompliantByConstructionSlide,
  PrivacySlide,
  NoBridgeRiskSlide,
  AtomicityProblemDivider,
  CoreOperationSlide,
  AtomicSwapsSlide,
  AgenticDACSlide,
  ProtocolSlide,
  ClobComparisonSlide,
  MathWorthItDivider,
  NewFinancialSystemDivider,
  ProofPapersSlide,
  ResourcesSlide,
  ThankYouChatSlide,
];
