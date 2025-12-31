import React from 'react';
import {
  Globe,
  Zap,
  Monitor,
  Users,
  Target,
  Calendar,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Lightbulb,
  CheckCircle,
  Scale
} from 'lucide-react';
import CaseStudyLayout from '../components/case-studies/CaseStudyLayout';

const TitanRealEstateCaseStudy: React.FC = () => {
  const caseStudyData = {
    hero: {
      title: "Titan Real Estate",
      category: "High-Performance Website",
      headline: "Slow website causing high bounce rate? We built a conversion-optimized site that achieved 98/100 Lighthouse score and 40% increase in qualified leads.",
      metric: "98/100",
      metricLabel: "Lighthouse Score",
      ctaText: "Book a Similar Solution"
    },
    clientOverview: {
      clientName: "Titan Real Estate",
      industry: "Real Estate",
      businessSize: "Large Agency",
      location: "Los Angeles, CA",
      description: "Titan Real Estate was experiencing high bounce rates due to their slow, outdated website. Their lead generation was suffering as potential clients were leaving before even viewing property listings. They needed a modern, fast website that would convert visitors into qualified leads."
    },
    problem: {
      title: "The Problem",
      description: "Titan Real Estate's website was loading in 6+ seconds, causing a 70% bounce rate. The outdated design and poor mobile experience were driving potential clients to competitors.",
      problems: [
        "Website loading in 6+ seconds",
        "70% bounce rate due to slow loading",
        "Poor mobile experience",
        "Outdated design not reflecting brand",
        "Low conversion rates on lead forms"
      ]
    },
    goal: {
      title: "The Goal",
      description: "Our objective was to create a high-performance, conversion-optimized website that would load in under 2 seconds, improve user experience across all devices, and significantly increase qualified lead generation.",
      goals: [
        "Achieve 90+ Lighthouse performance score",
        "Reduce bounce rate by 50%",
        "Increase qualified leads by 40%",
        "Optimize for mobile-first experience"
      ]
    },
    solution: {
      title: "The Solution",
      description: "We developed a Next.js conversion-optimized site with headless CMS integration, implementing advanced performance optimizations and conversion-focused design elements.",
      features: [
        {
          icon: <Globe className="w-6 h-6 text-blue-400" />,
          title: "Next.js Framework",
          description: "Leveraged Next.js for optimal performance, SEO, and user experience"
        },
        {
          icon: <Zap className="w-6 h-6 text-purple-400" />,
          title: "Performance Optimization",
          description: "Implemented advanced optimizations for sub-2s loading times"
        },
        {
          icon: <Monitor className="w-6 h-6 text-green-400" />,
          title: "Conversion-Focused Design",
          description: "Designed with lead generation as the primary goal"
        }
      ]
    },
    implementation: {
      title: "Implementation Breakdown",
      steps: [
        {
          icon: <Calendar className="w-6 h-6 text-blue-400" />,
          title: "Planning & Strategy",
          description: "Analyzed current website performance, user behavior, and competitor sites to identify optimization opportunities."
        },
        {
          icon: <Palette className="w-6 h-6 text-purple-400" />,
          title: "Design & Conversion Logic",
          description: "Created wireframes and designs focused on conversion optimization and mobile-first experience."
        },
        {
          icon: <Code2 className="w-6 h-6 text-green-400" />,
          title: "Development & Integration",
          description: "Built the Next.js site with headless CMS integration and implemented all performance optimizations."
        },
        {
          icon: <TestTube2 className="w-6 h-6 text-yellow-400" />,
          title: "Testing & Optimization",
          description: "Conducted extensive performance testing and A/B testing to optimize conversion elements."
        },
        {
          icon: <Rocket className="w-6 h-6 text-red-400" />,
          title: "Launch",
          description: "Deployed the site with performance monitoring and conversion tracking in place."
        }
      ]
    },
    results: {
      title: "Results & Impact",
      stats: [
        {
          value: "98/100",
          label: "Lighthouse Score",
          icon: <Target className="w-6 h-6 text-green-400" />
        },
        {
          value: "40%",
          label: "Increase in Leads",
          icon: <Users className="w-6 h-6 text-blue-400" />,
          change: "in qualified leads"
        },
        {
          value: "<2s",
          label: "Load Time",
          icon: <Zap className="w-6 h-6 text-purple-400" />
        },
        {
          value: "50%",
          label: "Bounce Rate Reduction",
          icon: <Monitor className="w-6 h-6 text-red-400" />
        }
      ],
      beforeAfter: {
        before: "6+ second load times, 70% bounce rate, outdated design",
        after: "98/100 Lighthouse score, 40% increase in qualified leads, modern design"
      },
      outcomes: [
        "Increased qualified leads by 40% in first month",
        "Reduced bounce rate from 70% to 35%",
        "Achieved sub-2s load times across all devices",
        "Improved search rankings due to Core Web Vitals",
        "Enhanced user experience leading to longer session times"
      ]
    },
    takeaways: {
      title: "Key Takeaways",
      takeaways: [
        {
          icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
          title: "Performance Drives Conversions",
          description: "Site speed directly impacts conversion rates - every second matters in real estate where buyers are time-sensitive."
        },
        {
          icon: <CheckCircle className="w-6 h-6 text-green-400" />,
          title: "Mobile-First Design",
          description: "Real estate searches are predominantly mobile, so mobile optimization was crucial for success."
        },
        {
          icon: <Scale className="w-6 h-6 text-blue-400" />,
          title: "Scalable Architecture",
          description: "The Next.js architecture allows for easy addition of new properties and features without performance degradation."
        }
      ]
    },
    techStack: {
      title: "Tech Stack",
      stack: [
        {
          category: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
        },
        {
          category: "Backend",
          items: ["Headless CMS", "Node.js", "GraphQL", "Prisma"]
        },
        {
          category: "Automation / AI",
          items: ["SEO Optimization", "Performance Monitoring", "A/B Testing"]
        },
        {
          category: "Infrastructure",
          items: ["Vercel", "CDN", "Image Optimization", "Serverless Functions"]
        }
      ]
    },
    cta: {
      title: "Want results like this? Let's build it.",
      description: "Stop losing leads to slow websites. Our high-performance solutions can transform your online presence and lead generation.",
      ctaText: "Book Free Consultation"
    }
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default TitanRealEstateCaseStudy;