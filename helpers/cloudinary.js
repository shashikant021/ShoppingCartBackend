const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dtd348l5l",
  api_key: "235365636649694",
  api_secret: "TPSSKRXrU9Vr2ncsqlOgpUIRe4s",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
