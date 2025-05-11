import cloudinary from "../../../config/Cloudnary.js";
import headerSchema from "../../../models/headerSchema/HeaderSchema.js";

export const createHeader = async (req, res) => {
  try {
    const { heading, links } = req.body;
    const file = req.file;

    const result = await cloudinary.uploader.upload(file.path);

    const newHeader = new headerSchema({
      heading,
      links: JSON.parse(links),
      image: result.secure_url
    });

    await newHeader.save();
    res.status(201).json({ success: true, data: newHeader });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getHeader = async (req, res) => {
  try {
    const header = await headerSchema.find();
    res.status(200).json({ success: true, data: header });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch data" });
  }
};
