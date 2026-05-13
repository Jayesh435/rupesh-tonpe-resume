import { connectDB } from "../lib/db";
import { categories, projects, services, settings, testimonials } from "../lib/seed-data";
import { CategoryModel } from "../lib/models/Category";
import { ProjectModel } from "../lib/models/Project";
import { ServiceModel } from "../lib/models/Service";
import { SettingModel } from "../lib/models/Setting";
import { TestimonialModel } from "../lib/models/Testimonial";
import { User } from "../lib/models/User";
import { hashPassword } from "../lib/auth";

async function run() {
  await connectDB();
  await Promise.all([
    CategoryModel.deleteMany({}),
    ProjectModel.deleteMany({}),
    ServiceModel.deleteMany({}),
    TestimonialModel.deleteMany({}),
    SettingModel.deleteMany({}),
    User.deleteMany({}),
  ]);

  await CategoryModel.insertMany(categories);
  await ProjectModel.insertMany(projects.map((p) => ({ ...p, _id: undefined })));
  await ServiceModel.insertMany(services.map((s) => ({ ...s, _id: undefined })));
  await TestimonialModel.insertMany(testimonials.map((t) => ({ ...t, _id: undefined })));
  await SettingModel.create({ ...settings, _id: undefined });

  const email = process.env.ADMIN_EMAIL || "admin@rupeshtonpe.com";
  const passwordHash = process.env.ADMIN_PASSWORD_HASH || (await hashPassword("admin123"));
  await User.create({ name: "Admin", email, passwordHash, role: "admin" });

  console.log("Seed complete");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
