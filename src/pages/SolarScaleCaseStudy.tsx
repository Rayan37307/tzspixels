import React from 'react';
import {
  Zap,
  Cpu,
  Bot,
  Clock,
  TrendingDown,
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

const SolarScaleCaseStudy: React.FC = () => {
  const caseStudyData = {
    hero: {
      title: "SolarScale SaaS",
      category: "Workflow Automation",
      headline: "Manual lead processing took 48 hours? We built an n8n automation that enabled instant lead response and 50% lower CPA.",
      metric: "50%",
      metricLabel: "Lower CPA",
      ctaText: "Book a Similar Solution"
    },
    clientOverview: {
      clientName: "SolarScale SaaS",
      industry: "SaaS / Solar",
      businessSize: "Mid-size Company",
      location: "Austin, TX",
      description: "SolarScale SaaS was manually processing leads that came from Facebook Ads, taking up to 48 hours to respond. This delay was causing qualified prospects to choose competitors, resulting in high CPA and low conversion rates. They needed an automated system to instantly process and respond to leads."
    },
    problem: {
      title: "The Problem",
      description: "SolarScale SaaS was manually processing leads from Facebook Ads, taking up to 48 hours to respond. This delay was causing qualified prospects to choose competitors, resulting in high CPA and low conversion rates.",
      problems: [
        "Manual lead processing took 48 hours",
        "High CPA due to poor conversion",
        "Qualified leads choosing competitors",
        "Team overwhelmed with manual tasks",
        "Inconsistent follow-up process"
      ]
    },
    goal: {
      title: "The Goal",
      description: "Our objective was to create an automated workflow that would process leads instantly, reduce response time to under 5 minutes, and significantly lower CPA while improving conversion rates.",
      goals: [
        "Reduce lead response time from 48 hours to under 5 minutes",
        "Lower CPA by 50%",
        "Increase lead conversion rate by 30%",
        "Automate 90% of lead processing tasks"
      ]
    },
    solution: {
      title: "The Solution",
      description: "We developed an n8n automation workflow that connects Facebook Ads directly to their CRM, enabling instant lead processing and follow-up sequences.",
      features: [
        {
          icon: <Zap className="w-6 h-6 text-blue-400" />,
          title: "n8n Automation",
          description: "Workflow automation connecting Facebook Ads to CRM in real-time"
        },
        {
          icon: <Cpu className="w-6 h-6 text-purple-400" />,
          title: "Instant Processing",
          description: "Leads processed and assigned within minutes of form submission"
        },
        {
          icon: <Bot className="w-6 h-6 text-green-400" />,
          title: "Follow-up Sequences",
          description: "Automated email and SMS sequences triggered immediately"
        }
      ]
    },
    implementation: {
      title: "Implementation Breakdown",
      steps: [
        {
          icon: <Calendar className="w-6 h-6 text-blue-400" />,
          title: "Planning & Strategy",
          description: "Analyzed current lead processing workflow, identified bottlenecks, and designed the automation flow."
        },
        {
          icon: <Palette className="w-6 h-6 text-purple-400" />,
          title: "Design & Automation Logic",
          description: "Created the n8n workflow logic and designed the lead scoring and assignment rules."
        },
        {
          icon: <Code2 className="w-6 h-6 text-green-400" />,
          title: "Development & Integration",
          description: "Built the n8n automation and integrated Facebook Ads with their CRM and communication tools."
        },
        {
          icon: <TestTube2 className="w-6 h-6 text-yellow-400" />,
          title: "Testing & Optimization",
          description: "Tested the automation with sample leads and optimized the workflow based on performance."
        },
        {
          icon: <Rocket className="w-6 h-6 text-red-400" />,
          title: "Launch",
          description: "Deployed the automation with monitoring and alerting systems in place."
        }
      ]
    },
    results: {
      title: "Results & Impact",
      stats: [
        {
          value: "50%",
          label: "Lower CPA",
          icon: <TrendingDown className="w-6 h-6 text-green-400" />
        },
        {
          value: "<5 min",
          label: "Response Time",
          icon: <Clock className="w-6 h-6 text-blue-400" />,
          change: "from 48 hours"
        },
        {
          value: "90%",
          label: "Process Automation",
          icon: <Zap className="w-6 h-6 text-purple-400" />
        },
        {
          value: "30%",
          label: "Conversion Increase",
          icon: <Target className="w-6 h-6 text-red-400" />
        }
      ],
      beforeAfter: {
        before: "48-hour lead processing, high CPA, low conversion",
        after: "Instant lead response, 50% lower CPA, 30% higher conversion"
      },
      outcomes: [
        "Reduced CPA by 50% while maintaining lead volume",
        "Increased lead conversion rate by 30%",
        "Eliminated 90% of manual lead processing tasks",
        "Improved team focus on high-value activities",
        "Achieved consistent follow-up process"
      ]
    },
    takeaways: {
      title: "Key Takeaways",
      takeaways: [
        {
          icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
          title: "Speed Wins Leads",
          description: "In competitive markets, response time is often the deciding factor for prospects choosing a provider."
        },
        {
          icon: <CheckCircle className="w-6 h-6 text-green-400" />,
          title: "Automation Scales Business",
          description: "Automating repetitive tasks allows teams to focus on strategic activities that drive growth."
        },
        {
          icon: <Scale className="w-6 h-6 text-blue-400" />,
          title: "Workflow Integration",
          description: "Connecting marketing channels directly to CRM eliminates delays and improves conversion."
        }
      ]
    },
    techStack: {
      title: "Tech Stack",
      stack: [
        {
          category: "Frontend",
          items: ["Facebook Ads", "Lead Forms", "CRM Interface"]
        },
        {
          category: "Backend",
          items: ["n8n", "Node.js", "MongoDB", "API Integrations"]
        },
        {
          category: "Automation / AI",
          items: ["Workflow Automation", "Lead Scoring", "Automated Follow-up"]
        },
        {
          category: "Infrastructure",
          items: ["Cloud Functions", "Webhook Processing", "Monitoring Tools"]
        }
      ]
    },
    cta: {
      title: "Want results like this? Let's build it.",
      description: "Stop losing leads to slow response times. Our automation solutions can transform your lead processing and conversion rates.",
      ctaText: "Book Free Consultation"
    }
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default SolarScaleCaseStudy;