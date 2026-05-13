import { Schema, model, models } from "mongoose";

const SettingSchema = new Schema(
  {
    siteTitle: { type: String, required: true },
    siteDescription: { type: String, required: true },
    seoKeywords: [{ type: String }],
    homeHeadline: { type: String, required: true },
    homeSubheadline: { type: String, required: true },
  },
  { timestamps: true }
);

export const SettingModel = models.Setting || model("Setting", SettingSchema);
