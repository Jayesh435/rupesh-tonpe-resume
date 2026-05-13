import { nanoid } from "nanoid";
import type { Category, CategoryName, Project, Service, SiteSettings, Testimonial } from "./types";

export const experiences = [
  {
    company: "MyAyur.app",
    role: "Creative Director",
    duration: "2024 - Present",
    responsibilities:
      "Led AI-first campaign visuals, brand storytelling, and social growth strategy for digital wellness products.",
    achievements: "Improved ad CTR by 43% through motion-led creative testing.",
  },
  {
    company: "VisualineSpace.in",
    role: "Senior Graphic & Motion Designer",
    duration: "2022 - 2024",
    responsibilities:
      "Developed premium branding systems and launch videos for D2C and service brands.",
    achievements: "Delivered 70+ campaign assets with a 98% client retention rate.",
  },
  {
    company: "AMH Singapore",
    role: "Video Editor & Visual Designer",
    duration: "2021 - 2022",
    responsibilities:
      "Produced performance marketing videos, social media edits, and product storytelling reels.",
    achievements: "Reduced production turnaround by 35% using reusable motion templates.",
  },
  {
    company: "Pallavi Goenka Homes",
    role: "Brand Communication Designer",
    duration: "2020 - 2021",
    responsibilities:
      "Created real-estate branding, print collateral, and digital creatives for luxury properties.",
    achievements: "Generated 2x lead quality increase with upgraded campaign aesthetics.",
  },
  {
    company: "Digi Direct Graphics",
    role: "Graphic Designer",
    duration: "2019 - 2020",
    responsibilities:
      "Executed social media and packaging design projects for regional business clients.",
    achievements: "Won 3 internal design excellence recognitions.",
  },
];

export const categories: Category[] = ([
  "Branding",
  "Motion Graphics",
  "Social Media",
  "Political Campaigns",
  "Packaging",
  "AI Ads",
  "UI/UX",
  "Video Editing",
] as CategoryName[]).map((name) => ({ _id: nanoid(), name, description: `${name} portfolio projects` }));

export const services: Service[] = [
  { _id: nanoid(), name: "Branding", icon: "Palette", description: "Brand strategy, visual identity systems, logo suites, and style guidelines.", pricingFrom: "₹25,000", ctaText: "Start Branding" },
  { _id: nanoid(), name: "Graphic Design", icon: "PenTool", description: "Campaign graphics, print collaterals, and social media visual systems.", pricingFrom: "₹12,000", ctaText: "Book Design" },
  { _id: nanoid(), name: "Video Editing", icon: "Film", description: "High-impact reels, ad edits, transitions, captions, and platform optimization.", pricingFrom: "₹15,000", ctaText: "Edit My Video" },
  { _id: nanoid(), name: "Motion Graphics", icon: "Sparkles", description: "Cinematic animations, explainer visuals, kinetic text and launch films.", pricingFrom: "₹20,000", ctaText: "Animate Now" },
  { _id: nanoid(), name: "AI Ads", icon: "Bot", description: "AI-generated ad creatives, scripting, voice and concept direction.", pricingFrom: "₹18,000", ctaText: "Launch AI Ads" },
  { _id: nanoid(), name: "Creative Direction", icon: "Clapperboard", description: "End-to-end campaign direction from concept to execution.", pricingFrom: "₹35,000", ctaText: "Hire Director" },
  { _id: nanoid(), name: "UI/UX Design", icon: "Monitor", description: "Wireframes, high-fidelity interfaces, and product visual systems.", pricingFrom: "₹30,000", ctaText: "Design Product" },
  { _id: nanoid(), name: "Social Media Design", icon: "Instagram", description: "Scroll-stopping social identity packs and monthly content design.", pricingFrom: "₹14,000", ctaText: "Scale Social" },
];

export const testimonials: Testimonial[] = [
  { _id: nanoid(), name: "Ankita Shah", role: "Founder", company: "MyAyur.app", quote: "Rupesh transforms ideas into cinematic stories. Every campaign felt premium and conversion-ready." },
  { _id: nanoid(), name: "Rajiv Menon", role: "Marketing Lead", company: "AMH Singapore", quote: "Speed, precision, and world-class visual taste. Our video ad quality jumped immediately." },
  { _id: nanoid(), name: "Priyanka Goenka", role: "Director", company: "Pallavi Goenka Homes", quote: "His design direction elevated our luxury positioning and lead quality." },
];

const projectBase = [
  ["Luxury Ayurveda Campaign", "Branding", "MyAyur.app"],
  ["AI Performance Ad Set", "AI Ads", "MyAyur.app"],
  ["Urban Homes Launch Reel", "Video Editing", "Pallavi Goenka Homes"],
  ["Election Social Kit", "Political Campaigns", "Regional Candidate"],
  ["Organic Skincare Packaging", "Packaging", "DermaLeaf"],
  ["SaaS Dashboard Concept", "UI/UX", "VisualineSpace.in"],
  ["Festival Motion Promo", "Motion Graphics", "AMH Singapore"],
  ["Instagram Growth Creatives", "Social Media", "Digi Direct Graphics"],
] as const;

export const projects: Project[] = projectBase.map(([title, category, client], i) => ({
  _id: nanoid(),
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  title,
  description: `${title} crafted with a cinematic visual language focused on engagement and premium storytelling.`,
  richContent:
    "<h3>Creative Direction</h3><p>Defined a bold visual strategy balancing performance and elegance.</p><h3>Execution</h3><p>Built assets for social, web, and video with platform-specific optimization.</p>",
  coverImage: `https://images.unsplash.com/photo-${1500000000000 + i * 111111}?auto=format&fit=crop&w=1600&q=80`,
  images: [
    `https://images.unsplash.com/photo-${1500000000000 + i * 111111}?auto=format&fit=crop&w=1400&q=80`,
    `https://images.unsplash.com/photo-${1500000000500 + i * 111111}?auto=format&fit=crop&w=1400&q=80`,
  ],
  videos: ["https://www.youtube.com/embed/9No-FiEInLA"],
  behanceUrl: "https://www.behance.net/",
  instagramUrl: "https://www.instagram.com/",
  tags: ["Creative Direction", "Premium", "Cinematic"],
  category: category as Project["category"],
  clientName: client,
  date: new Date(2024, i, 1).toISOString(),
  featured: i < 4,
  status: "published",
  testimonial: testimonials[i % testimonials.length]?.quote,
  challenges: "Scaling visual consistency across channels while maintaining a luxury feel.",
  process: "Research → Storyboard → Design system → Motion → Iteration and performance tuning.",
  results: "Higher engagement, improved conversion quality, and stronger premium brand recall.",
}));

export const settings: SiteSettings = {
  _id: nanoid(),
  siteTitle: "Rupesh Tonpe | Creative Director & AI Visual Designer",
  siteDescription: "Premium cinematic portfolio of Rupesh Tonpe — Graphic Designer, Video Editor, Motion Designer and AI Creator.",
  seoKeywords: ["Rupesh Tonpe", "Creative Director", "Graphic Designer", "Video Editor", "AI Creator", "Nagpur"],
  homeHeadline: "Creative Director & AI Visual Designer",
  homeSubheadline:
    "I craft elite visual identities, motion stories, and AI-powered campaigns for modern brands.",
};
