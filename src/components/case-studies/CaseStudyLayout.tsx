import React from 'react';
import HeroSection from './HeroSection';
import ClientOverview from './ClientOverview';
import ProblemSection from './ProblemSection';
import GoalSection from './GoalSection';
import SolutionSection from './SolutionSection';
import ImplementationSection from './ImplementationSection';
import ResultsSection from './ResultsSection';
import TakeawaysSection from './TakeawaysSection';
import TechStackSection from './TechStackSection';
import CTASection from './CTASection';

interface CaseStudyLayoutProps {
  hero: {
    title: string;
    category: string;
    headline: string;
    metric: string;
    metricLabel: string;
    ctaText: string;
  };
  clientOverview: {
    clientName: string;
    industry: string;
    businessSize: string;
    location?: string;
    description: string;
  };
  problem: {
    title: string;
    description: string;
    problems: string[];
  };
  goal: {
    title: string;
    description: string;
    goals: string[];
  };
  solution: {
    title: string;
    description: string;
    features: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
  implementation: {
    title: string;
    steps: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
  results: {
    title: string;
    stats: {
      value: string;
      label: string;
      icon: React.ReactNode;
      change?: string;
    }[];
    beforeAfter: {
      before: string;
      after: string;
    };
    outcomes: string[];
  };
  takeaways: {
    title: string;
    takeaways: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
  techStack: {
    title: string;
    stack: {
      category: string;
      items: string[];
    }[];
  };
  cta: {
    title: string;
    description: string;
    ctaText: string;
  };
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  hero,
  clientOverview,
  problem,
  goal,
  solution,
  implementation,
  results,
  takeaways,
  techStack,
  cta
}) => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <HeroSection {...hero} />
      <ClientOverview {...clientOverview} />
      <ProblemSection {...problem} />
      <GoalSection {...goal} />
      <SolutionSection {...solution} />
      <ImplementationSection {...implementation} />
      <ResultsSection {...results} />
      <TakeawaysSection {...takeaways} />
      <TechStackSection {...techStack} />
      <CTASection {...cta} />
    </div>
  );
};

export default CaseStudyLayout;