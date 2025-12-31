
import React from 'react';
import { 
  Zap, 
  Bot, 
  Globe, 
  BarChart3, 
  Clock, 
  Smartphone, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  Code2,
  Workflow,
  Sparkles
} from 'lucide-react';

export const COLORS = {
  primary: '#3b82f6',
  secondary: '#a855f7',
  background: '#000000',
  surface: '#0a0a0a',
};

export const SERVICES = [
  {
    title: 'Web Development',
    problem: 'Your site is slow, unresponsive, and fails to convert visitors.',
    solution: 'We build ultra-fast, Next.js conversion hubs that dominate SEO.',
    result: 'Zero lag. High retention. Maximum revenue.',
    icon: <Code2 className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'AI Automation',
    problem: 'Manual tasks are bleeding your company time and profit every day.',
    solution: 'Custom n8n and Python workflows that run your business on autopilot.',
    result: 'Save 100+ hours monthly. Eliminate human error.',
    icon: <Workflow className="w-8 h-8 text-purple-500" />
  },
  {
    title: 'Chatbot Ecosystems',
    problem: 'You miss customers because you can\'t reply to messages at 3 AM.',
    solution: 'Intelligent WhatsApp, IG, and Web bots that qualify and close leads.',
    result: '24/7 sales coverage. 100% response rate.',
    icon: <MessageSquare className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Business Intel',
    problem: 'You are making decisions based on "gut feeling" instead of data.',
    solution: 'Live performance dashboards that sync all your business apps.',
    result: 'Total visibility. Strategic growth. Data-backed scaling.',
    icon: <BarChart3 className="w-8 h-8 text-purple-400" />
  }
];

export const STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We audit your manual workflows and identify the high-impact automation opportunities.'
  },
  {
    number: '02',
    title: 'System Prototyping',
    description: 'We design the architecture for your high-performance site and AI logic.'
  },
  {
    number: '03',
    title: 'Development & Build',
    description: 'Our engineers build your custom systems using modern, scalable tech stacks.'
  },
  {
    number: '04',
    title: 'Launch & Scaling',
    description: 'We deploy your system and continuously optimize for peak conversion performance.'
  }
];

export const CASE_STUDIES = [
  {
    title: 'MedFlow Clinic',
    category: 'AI Booking System',
    problem: '60% of bookings lost to phone tag.',
    solution: 'WhatsApp AI Booking Agent + CRM Sync.',
    result: '3.5x booking increase in 30 days.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Titan Real Estate',
    category: 'High-Performance Web',
    problem: 'Slow site causing high bounce rates.',
    solution: 'Next.js conversion hub with headless CMS.',
    result: '98/100 Lighthouse score & 40% more leads.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'SolarScale SaaS',
    category: 'Workflow Automation',
    problem: 'Lead processing took 48 hours manually.',
    solution: 'n8n automation connecting FB Ads to CRM.',
    result: 'Instant lead response & 50% lower CPA.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, MedFlow',
    content: 'TZS Pixels didn\'t just build a website; they built a revenue engine. Our AI booking agent is now our best employee.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, SolarScale',
    content: 'The automation workflows they built saved us two full-time salaries in administrative work. Highly recommended.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director, Titan',
    content: 'Finally, an agency that understands that speed is a feature. Our new site is incredibly fast and actually converts.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Fast Delivery',
    description: 'We work in agile sprints to ship production-ready systems in weeks.',
    icon: <Zap className="w-10 h-10 text-blue-500" />
  },
  {
    title: 'AI-First Thinking',
    description: 'We don\'t just add AI as a gimmick. It\'s the core of how we optimize your business.',
    icon: <Sparkles className="w-10 h-10 text-purple-500" />
  },
  {
    title: 'Business-Driven',
    description: 'Every line of code we write is focused on your bottom-line results.',
    icon: <TrendingUp className="w-10 h-10 text-pink-500" />
  },
  {
    title: 'Secure & Scalable',
    description: 'Built with enterprise-grade security to grow as your business grows.',
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />
  }
];

// Added USE_CASES export to resolve the missing member error in UseCases.tsx
export const USE_CASES = [
  {
    title: 'Lead Intake Automation',
    description: 'Stop wasting time manually entering data. We automate lead capture from ads directly into your CRM.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'AI Appointment Setting',
    description: 'A dedicated AI agent that handles back-and-forth scheduling via WhatsApp or SMS 24/7.',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: 'Dynamic Content Hubs',
    description: 'High-speed Next.js sites that update automatically from your Google Sheets or Notion databases.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Performance Dashboards',
    description: 'Real-time visibility into your business ROI, syncing data from Stripe, Facebook Ads, and more.',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export const PRICING_PLANS = [
  {
    name: 'Launch',
    price: '$2,500',
    description: 'Establish your presence with an automated high-performance system.',
    features: [
      'Custom Next.js Landing Page',
      'AI Lead Capture Engine',
      'CRM Integration',
      'Basic Workflow Automation',
      '90-Day Performance Audit'
    ]
  },
  {
    name: 'Growth',
    price: '$5,000',
    description: 'The standard for businesses ready to dominate their market.',
    features: [
      'Full Multi-Page Platform',
      '24/7 AI Sales Agent (WA/IG)',
      'Advanced Multi-App Automation',
      'Performance Dashboard',
      'SEO Content Strategy',
      'Priority Tech Support'
    ],
    recommended: true
  },
  {
    name: 'Elite',
    price: 'Custom',
    description: 'Custom infrastructure for complex operations and high volume.',
    features: [
      'Full-Scale Custom Software',
      'Multi-Model AI Integration',
      'Internal Operation Dashboards',
      'Dedicated Tech Squad',
      'Monthly Strategic Reviews',
      '24/7 Uptime Monitoring'
    ]
  }
];
