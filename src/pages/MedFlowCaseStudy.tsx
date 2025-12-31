import React from 'react';
import {
  Bot,
  Database,
  MessageCircle,
  Users,
  Clock,
  TrendingUp,
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

const MedFlowClinicCaseStudy: React.FC = () => {
  const caseStudyData = {
    hero: {
      title: "MedFlow Clinic",
      category: "AI Booking System",
      headline: "60% of bookings lost due to phone tag? We built an AI solution that increased bookings by 3.5x in 30 days.",
      metric: "3.5x",
      metricLabel: "Booking Increase in 30 Days",
      ctaText: "Book a Similar Solution"
    },
    clientOverview: {
      clientName: "MedFlow Clinic",
      industry: "Healthcare",
      businessSize: "Mid-size Practice",
      location: "New York, NY",
      description: "MedFlow Clinic was struggling with a traditional phone-based booking system that resulted in 60% of potential appointments being lost due to phone tag. Patients were frustrated with long wait times and limited availability, while staff were overwhelmed with manual scheduling tasks."
    },
    problem: {
      title: "The Problem",
      description: "MedFlow Clinic was losing 60% of potential bookings due to inefficient phone-based scheduling. Patients couldn't reach staff during business hours, and the manual process was consuming valuable resources.",
      problems: [
        "60% of bookings lost due to phone tag",
        "Staff overwhelmed with manual scheduling",
        "Patients frustrated with long wait times",
        "Missed opportunities during off-hours",
        "Inefficient resource allocation"
      ]
    },
    goal: {
      title: "The Goal",
      description: "Our objective was to create an automated booking system that would capture leads 24/7, reduce staff workload, and significantly increase booking rates while maintaining the personal touch patients expect from healthcare providers.",
      goals: [
        "Reduce booking loss from 60% to under 10%",
        "Implement 24/7 automated booking system",
        "Integrate with existing CRM and scheduling tools",
        "Maintain patient satisfaction scores above 90%"
      ]
    },
    solution: {
      title: "The Solution",
      description: "We developed a WhatsApp AI Booking Agent that integrates seamlessly with their CRM, allowing patients to book appointments anytime while automatically synchronizing with the clinic's scheduling system.",
      features: [
        {
          icon: <Bot className="w-6 h-6 text-blue-400" />,
          title: "WhatsApp AI Agent",
          description: "Intelligent chatbot that handles appointment requests via WhatsApp, available 24/7"
        },
        {
          icon: <Database className="w-6 h-6 text-purple-400" />,
          title: "CRM Integration",
          description: "Seamless synchronization with existing patient management systems"
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-green-400" />,
          title: "Real-time Updates",
          description: "Patients receive instant confirmations and reminders via WhatsApp"
        }
      ]
    },
    implementation: {
      title: "Implementation Breakdown",
      steps: [
        {
          icon: <Calendar className="w-6 h-6 text-blue-400" />,
          title: "Planning & Strategy",
          description: "Analyzed current booking workflow, identified pain points, and designed the AI agent conversation flow to match patient expectations."
        },
        {
          icon: <Palette className="w-6 h-6 text-purple-400" />,
          title: "Design & Automation Logic",
          description: "Created intuitive conversation flows and designed the AI agent's personality to be helpful yet professional for healthcare context."
        },
        {
          icon: <Code2 className="w-6 h-6 text-green-400" />,
          title: "Development & Integration",
          description: "Built the WhatsApp AI agent and integrated it with their existing CRM and scheduling systems using secure APIs."
        },
        {
          icon: <TestTube2 className="w-6 h-6 text-yellow-400" />,
          title: "Testing & Optimization",
          description: "Conducted extensive testing with real patient scenarios and optimized the conversation flow based on user feedback."
        },
        {
          icon: <Rocket className="w-6 h-6 text-red-400" />,
          title: "Launch",
          description: "Deployed the system with a phased rollout, starting with a pilot group before full implementation."
        }
      ]
    },
    results: {
      title: "Results & Impact",
      stats: [
        {
          value: "3.5x",
          label: "Booking Increase",
          icon: <TrendingUp className="w-6 h-6 text-green-400" />,
          change: "in 30 days"
        },
        {
          value: "60%",
          label: "Booking Loss Reduction",
          icon: <Users className="w-6 h-6 text-blue-400" />,
          change: "to under 10%"
        },
        {
          value: "24/7",
          label: "Availability",
          icon: <Clock className="w-6 h-6 text-purple-400" />
        },
        {
          value: "95%",
          label: "Patient Satisfaction",
          icon: <Target className="w-6 h-6 text-green-400" />
        }
      ],
      beforeAfter: {
        before: "60% of bookings lost due to phone tag, staff overwhelmed with manual scheduling",
        after: "3.5x booking increase, 24/7 availability, 95% patient satisfaction"
      },
      outcomes: [
        "Increased revenue by $120K in first quarter after implementation",
        "Reduced staff scheduling workload by 70%",
        "Achieved 95% patient satisfaction rating for booking process",
        "Captured leads during off-hours that were previously lost",
        "Improved staff focus on patient care instead of administrative tasks"
      ]
    },
    takeaways: {
      title: "Key Takeaways",
      takeaways: [
        {
          icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
          title: "AI Enhances Human Touch",
          description: "AI doesn't replace human interaction but enhances it by handling routine tasks, allowing staff to focus on patient care."
        },
        {
          icon: <CheckCircle className="w-6 h-6 text-green-400" />,
          title: "Simple Solutions Work",
          description: "Using WhatsApp as the communication channel was key - it's familiar and accessible to all patient demographics."
        },
        {
          icon: <Scale className="w-6 h-6 text-blue-400" />,
          title: "Scalable Architecture",
          description: "The system was designed to scale with clinic growth without requiring additional staff resources."
        }
      ]
    },
    techStack: {
      title: "Tech Stack",
      stack: [
        {
          category: "Frontend",
          items: ["WhatsApp Business API", "Twilio", "React"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "MongoDB", "Dialogflow"]
        },
        {
          category: "Automation / AI",
          items: ["Natural Language Processing", "AI Conversation Flow", "Automated Scheduling"]
        },
        {
          category: "Infrastructure",
          items: ["AWS", "Docker", "CI/CD Pipeline"]
        }
      ]
    },
    cta: {
      title: "Want results like this? Let's build it.",
      description: "Stop losing bookings to phone tag. Our AI solutions can transform your customer acquisition and retention.",
      ctaText: "Book Free Consultation"
    }
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default MedFlowClinicCaseStudy;