import { Schema, model, models } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ContactMessageModel = models.ContactMessage || model("ContactMessage", ContactMessageSchema);
