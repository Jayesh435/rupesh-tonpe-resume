export type CategoryName =
  | "Branding"
  | "Motion Graphics"
  | "Social Media"
  | "Political Campaigns"
  | "Packaging"
  | "AI Ads"
  | "UI/UX"
  | "Video Editing";

export interface Project {
  _id: string;
  slug: string;
  title: string;
  description: string;
  richContent: string;
  coverImage: string;
  images: string[];
  videos: string[];
  behanceUrl?: string;
  instagramUrl?: string;
  tags: string[];
  category: CategoryName;
  clientName: string;
  date: string;
  featured: boolean;
  status: "draft" | "published";
  testimonial?: string;
  challenges?: string;
  process?: string;
  results?: string;
}

export interface Service {
  _id: string;
  name: string;
  icon: string;
  description: string;
  pricingFrom: string;
  ctaText: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface Category {
  _id: string;
  name: CategoryName;
  description: string;
}

export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export interface SiteSettings {
  _id: string;
  siteTitle: string;
  siteDescription: string;
  seoKeywords: string[];
  homeHeadline: string;
  homeSubheadline: string;
}
