import { v2 as cloudinary } from "cloudinary";

export const CLOUDINARY_NOT_CONFIGURED_ERROR = "Cloudinary is not configured.";

export class CloudinaryNotConfiguredError extends Error {
  constructor() {
    super(CLOUDINARY_NOT_CONFIGURED_ERROR);
    this.name = "CloudinaryNotConfiguredError";
  }
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(fileBuffer: Buffer, folder = "rupesh-portfolio") {
  if (!process.env.CLOUDINARY_CLOUD_NAME) {
    throw new CloudinaryNotConfiguredError();
  }

  return new Promise<{ secure_url: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder, resource_type: "auto" }, (error, result) => {
      if (error || !result) return reject(error || new Error("Upload failed"));
      resolve({ secure_url: result.secure_url });
    });
    stream.end(fileBuffer);
  });
}
