import { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    quote: { type: String, required: true },
    avatar: String,
  },
  { timestamps: true }
);

export const TestimonialModel = models.Testimonial || model("Testimonial", TestimonialSchema);
