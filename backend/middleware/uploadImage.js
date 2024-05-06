
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

 const uploadImage = async (req, res, next) => {
  try {
    if(req.file.path){
      const result = await cloudinary.uploader.upload(req.file.path);
      req.file_urls = [result.secure_url];
    }else{
    res.json({ msg: "image required" });
    }
  } catch (error) {
    res.json({ msg: "Error uploading image" });
  }
   next()
};
module.exports=uploadImage
