import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    richContent: { type: String, default: "" },
    coverImage: { type: String, required: true },
    images: [{ type: String }],
    videos: [{ type: String }],
    behanceUrl: String,
    instagramUrl: String,
    tags: [{ type: String }],
    category: { type: String, required: true },
    clientName: { type: String, required: true },
    date: { type: Date, required: true },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    testimonial: String,
    challenges: String,
    process: String,
    results: String,
  },
  { timestamps: true }
);

export const ProjectModel = models.Project || model("Project", ProjectSchema);
