import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async (filePath, folderName = "default") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folderName,
    });
    return result.secure_url; // ya pura result chaho to return result;
  } catch (error) {
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};

export default uploadToCloudinary;
