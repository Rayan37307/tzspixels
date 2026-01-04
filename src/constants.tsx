import {
  Zap,
  BarChart3,
  MessageSquare,
  Calendar,
  TrendingUp,
  ShieldCheck,
  Code2,
  Workflow,
  Sparkles
} from 'lucide-react';

/* =========================
   THEME
========================= */

export const COLORS = {
  primary: '#3b82f6',
  secondary: '#a855f7',
  background: '#000000',
  surface: '#0a0a0a',
};

/* =========================
   SERVICES
========================= */

export const SERVICES = [
  {
    title: 'High-Performance Web Development',
    problem: 'Your website looks fine but loads slow and doesn’t convert visitors.',
    solution: 'We build ultra-fast, conversion-focused Next.js websites designed to rank, load instantly, and convert.',
    result: 'Faster load times. Higher engagement. More qualified leads.',
    icon: <Code2 className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'AI Automation Systems',
    problem: 'Manual processes are silently draining your time and money every day.',
    solution: 'Custom n8n + Python automation systems that handle repetitive work automatically.',
    result: 'Save 100+ hours per month. Fewer mistakes. Scalable operations.',
    icon: <Workflow className="w-8 h-8 text-purple-500" />
  },
  {
    title: 'Omnichannel Chatbot Ecosystems',
    problem: 'Leads message you on different platforms — and you can’t reply 24/7.',
    solution: 'Smart AI agents for Website, WhatsApp, Instagram, and Messenger that qualify, follow up, and book leads.',
    result: '24/7 responses. Zero missed leads. Higher close rates.',
    icon: <MessageSquare className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Business Intelligence & Dashboards',
    problem: 'You’re making decisions without real-time visibility into your data.',
    solution: 'Live dashboards that sync your sales, leads, and operations into one clear view.',
    result: 'Full clarity. Smarter decisions. Confident scaling.',
    icon: <BarChart3 className="w-8 h-8 text-purple-400" />
  }
];

/* =========================
   PROCESS
========================= */

export const STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your workflows, funnels, and bottlenecks to identify high-impact automation opportunities.'
  },
  {
    number: '02',
    title: 'System Architecture',
    description: 'We design a scalable system covering website, AI logic, automations, and integrations.'
  },
  {
    number: '03',
    title: 'Build & Integration',
    description: 'Our engineers develop, test, and connect everything using modern, production-ready tech.'
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    description: 'We deploy your system and continuously optimize it for speed, reliability, and conversions.'
  }
];

/* =========================
   CASE STUDIES
========================= */

export const CASE_STUDIES = [
  {
    title: 'MedFlow Clinic',
    category: 'AI Booking Automation',
    problem: 'Over 60% of booking requests were missed due to delayed responses.',
    solution: 'AI booking agent on WhatsApp with direct CRM sync.',
    result: '3.5× increase in bookings within 30 days.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Titan Real Estate',
    category: 'High-Performance Website',
    problem: 'Slow website causing high bounce rates and lost leads.',
    solution: 'Next.js conversion-focused website with headless CMS.',
    result: '98/100 Lighthouse score and 40% increase in inbound leads.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'SolarScale SaaS',
    category: 'Workflow Automation',
    problem: 'Manual lead handling caused 48-hour response delays.',
    solution: 'n8n automation connecting ads, CRM, and notifications.',
    result: 'Instant lead response and 50% lower acquisition cost.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
  }
];

/* =========================
   TESTIMONIALS
========================= */

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, MedFlow Clinic',
    content:
      'This wasn’t just a website build. They delivered a full AI system that now handles bookings better than a human team.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, SolarScale',
    content:
      'Their automation replaced hours of manual work every day. We scaled faster without hiring more staff.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director, Titan Real Estate',
    content:
      'Speed is everything. Our new site is insanely fast and finally converts traffic into real leads.'
  }
];

/* =========================
   WHY CHOOSE US
========================= */

export const WHY_CHOOSE_US = [
  {
    title: 'Fast & Reliable Delivery',
    description: 'We ship production-ready systems quickly without cutting corners.',
    icon: <Zap className="w-10 h-10 text-blue-500" />
  },
  {
    title: 'AI-First Approach',
    description: 'AI is not an add-on — it’s the foundation of every system we build.',
    icon: <Sparkles className="w-10 h-10 text-purple-500" />
  },
  {
    title: 'ROI-Focused Engineering',
    description: 'Every feature is built to drive measurable business results.',
    icon: <TrendingUp className="w-10 h-10 text-pink-500" />
  },
  {
    title: 'Secure & Scalable Systems',
    description: 'Enterprise-grade security and scalability baked in from day one.',
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />
  }
];

/* =========================
   USE CASES
========================= */

export const USE_CASES = [
  {
    title: 'Automated Lead Intake',
    description: 'Capture, qualify, and route leads automatically from Website, WhatsApp, Instagram, and Messenger.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'AI Appointment Scheduling',
    description: '24/7 AI agent that handles booking conversations and calendar coordination.',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: 'Dynamic Content Websites',
    description: 'Blazing-fast websites that update automatically from Google Sheets or Notion.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Live Performance Dashboards',
    description: 'Real-time visibility into leads, revenue, and campaign performance.',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

/* =========================
   PRICING
========================= */
export const PRICING_PLANS = [
  {
    name: 'Starter',
    setup: '$99',
    monthly: '$39/month',
    description: 'Simple AI chatbot system to start capturing and responding to leads automatically',
    features: [
      'AI Chatbot (Website OR WhatsApp OR Instagram OR Messenger)',
      'Lead capture to Google Sheets or CRM',
      'Instant Email & WhatsApp notifications',
      'Basic automation (1 workflow)',
      '14 days post-launch support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    setup: '$499',
    monthly: '$99/month',
    description: 'Omnichannel AI sales agent and automation system for scaling businesses',
    features: [
      '24/7 AI Sales Agent (WhatsApp + Instagram + Messenger)',
      'Lead qualification (Hot / Warm / Cold)',
      'Appointment booking automation',
      'CRM integration (Sheets, Notion, HubSpot – basic)',
      'Email & WhatsApp automated follow-ups',
      'Monthly optimization & tuning'
    ],
    cta: 'Start Growing',
    recommended: true
  },
  {
    name: 'Pro',
    setup: '$1,500',
    monthly: '$199/month',
    description: 'Advanced AI workflows and automation built for high-volume operations',
    features: [
      'Multiple AI workflows (Sales + Support)',
      'Automated follow-up sequences across WhatsApp, Instagram & Messenger',
      'Basic performance dashboard',
      'Custom business logic & rules',
      'Priority support',
      'Monthly strategy call'
    ],
    cta: 'Go Pro'
  }
];


/* =========================
   ADD-ONS
========================= */

export const ADD_ONS = [
  {
    name: 'Extra AI workflows or chatbots',
    price: '$50–$150 per flow',
    description: 'Additional AI agents or automation workflows'
  },
  {
    name: 'Additional integrations',
    price: '$50–$100/month',
    description: 'CRM, Stripe, Google Workspace, Ads platforms'
  },
  {
    name: '24/7 priority support',
    price: '$50–$100/month',
    description: 'Fast-response support and system monitoring'
  },
  {
    name: 'Custom analytics dashboards',
    price: '$100–$300 one-time',
    description: 'Tailored business intelligence dashboards'
  }
];
