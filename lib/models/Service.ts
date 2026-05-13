import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    description: { type: String, required: true },
    pricingFrom: { type: String, required: true },
    ctaText: { type: String, required: true },
  },
  { timestamps: true }
);

export const ServiceModel = models.Service || model("Service", ServiceSchema);
