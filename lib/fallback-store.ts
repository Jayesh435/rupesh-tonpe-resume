import { nanoid } from "nanoid";
import { categories, projects, services, settings, testimonials } from "./seed-data";
import type { Category, ContactMessage, Project, Service, SiteSettings, Testimonial } from "./types";

export const store: {
  projects: Project[];
  categories: Category[];
  testimonials: Testimonial[];
  services: Service[];
  contacts: ContactMessage[];
  settings: SiteSettings;
} = {
  projects: structuredClone(projects),
  categories: structuredClone(categories),
  testimonials: structuredClone(testimonials),
  services: structuredClone(services),
  contacts: [],
  settings: structuredClone(settings),
};

export const newId = () => nanoid();
