// src/data/features.jsx

// Reusable SVG icons for large graphics (hollow, stroke-based)
export const RobotGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16.01" />
    <line x1="16" y1="16" x2="16" y2="16.01" />
  </svg>
);

export const UsersGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

export const MessageGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const CalendarGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const MegaphoneGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="11 19 2 12 11 5 11 19" />
    <path d="M22 12A10 10 0 0 1 12 22" />
  </svg>
);

export const StarGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const ChartGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="22" x2="22" y2="22" />
  </svg>
);

export const RocketGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1.5c1.6-1.6 4.1-1.9 6-1 2-2 3-5.5 3-5.5s-3.5 1-5.5 3c-.9 1.9-1.2 4.4.4 6a5.4 5.4 0 0 0-1.5 1z" />
    <circle cx="14.5" cy="9.5" r="1.5" />
  </svg>
);

export const featuresData = [
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    description: "A 24/7 multilingual voice & chat agent that handles inbound calls, books appointments and answers FAQs — even at 2am.",
    bullets: ["Hindi + English + regional", "Books appointments live", "WhatsApp + voice", "Never misses a lead"],
    icon: <><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></>,
    graphic: <RobotGraphic />
  },
  {
    slug: "dental-crm",
    title: "Dental CRM",
    description: "Patient records, treatment plans, recall lists and lifetime value — finally in one beautiful place.",
    bullets: ["Unified patient profiles", "Treatment plan tracking", "Recall automation", "LTV & cohort analytics"],
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    graphic: <UsersGraphic />
  },
  {
    slug: "whatsapp-crm",
    title: "WhatsApp CRM",
    description: "Verified WhatsApp Business API with templates, broadcasts and a shared inbox for your team.",
    bullets: ["Green-tick verification", "Drip campaigns", "Shared team inbox", "DPDP-compliant"],
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    graphic: <MessageGraphic />
  },
  {
    slug: "appointment-management",
    title: "Appointment Management",
    description: "Smart calendar with auto-reminders, no-show recovery and chair utilisation insights.",
    bullets: ["Online booking page", "3-touch reminders", "No-show recovery", "Chair utilisation %"],
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    graphic: <CalendarGraphic />
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    description: "Run Meta & Google ads, landing pages and patient drip campaigns from one cockpit.",
    bullets: ["Done-for-you ads", "Landing page builder", "Lead routing", "Attribution"],
    icon: <><polygon points="11 19 2 12 11 5 11 19"/><path d="M22 12A10 10 0 0 1 12 22"/></>,
    graphic: <MegaphoneGraphic />
  },
  {
    slug: "google-review-automation",
    title: "Google Review Automation",
    description: "After every visit, the right patients are nudged to leave a glowing Google review.",
    bullets: ["Smart sentiment routing", "1-tap review links", "Reply templates", "Reputation dashboard"],
    icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    graphic: <StarGraphic />
  },
  {
    slug: "revenue-analytics",
    title: "Revenue Analytics",
    description: "Track collections, doctor productivity, treatment-mix and ROI in real-time.",
    bullets: ["Daily collections", "Doctor scorecards", "Procedure profitability", "Forecasting"],
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="22" x2="22" y2="22"/></>,
    graphic: <ChartGraphic />
  },
  {
    slug: "new-clinic-launch-pack",
    title: "New Clinic Launch Pack",
    description: "Opening a new clinic? Brand, website, GMB and 90-day playbook — all done for you.",
    bullets: ["Brand identity kit", "Website + booking", "Google Business setup", "90-day growth plan"],
    icon: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1.5c1.6-1.6 4.1-1.9 6-1 2-2 3-5.5 3-5.5s-3.5 1-5.5 3c-.9 1.9-1.2 4.4.4 6a5.4 5.4 0 0 0-1.5 1z" /><circle cx="14.5" cy="9.5" r="1.5" /></>,
    graphic: <RocketGraphic />
  }
];
