import { connectDB, hasDatabase } from "./db";
import { store } from "./fallback-store";
import { CategoryModel } from "./models/Category";
import { ContactMessageModel } from "./models/ContactMessage";
import { ProjectModel } from "./models/Project";
import { ServiceModel } from "./models/Service";
import { SettingModel } from "./models/Setting";
import { TestimonialModel } from "./models/Testimonial";
import type { Category, ContactMessage, Project, Service, SiteSettings, Testimonial } from "./types";

export async function getProjects({ publishedOnly = true } = {}): Promise<Project[]> {
  const database = await connectDB();
  if (database) {
    const query = publishedOnly ? { status: "published" } : {};
    return (await ProjectModel.find(query).sort({ date: -1 }).lean()) as unknown as Project[];
  }
  return store.projects.filter((p) => (publishedOnly ? p.status === "published" : true));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const database = await connectDB();
  if (database) {
    return (await ProjectModel.findOne({ slug }).lean()) as unknown as Project | null;
  }
  return store.projects.find((p) => p.slug === slug) || null;
}

export async function getServices(): Promise<Service[]> {
  const database = await connectDB();
  if (database) {
    return (await ServiceModel.find().lean()) as unknown as Service[];
  }
  return store.services;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const database = await connectDB();
  if (database) {
    return (await TestimonialModel.find().lean()) as unknown as Testimonial[];
  }
  return store.testimonials;
}

export async function getCategories(): Promise<Category[]> {
  const database = await connectDB();
  if (database) {
    return (await CategoryModel.find().lean()) as unknown as Category[];
  }
  return store.categories;
}

export async function getSettings(): Promise<SiteSettings | null> {
  const database = await connectDB();
  if (database) {
    const doc = await SettingModel.findOne().lean();
    return (doc as unknown as SiteSettings) || null;
  }
  return store.settings;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const database = await connectDB();
  if (database) {
    return (await ContactMessageModel.find().sort({ createdAt: -1 }).lean()) as unknown as ContactMessage[];
  }
  return store.contacts;
}
