import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  const fileUrl = [];
  console.log("file",files);
  let result 
  if(files.main_image){
    for (let file of files.main_image) {
      try{
       result = await cloudinary.uploader.upload(file.path, {
        folder: "doraemon",
        type: "private",
      });}catch(e){
        console.log("it",e);
      }
      
      fileUrl.push({
        url: result.secure_url,
        publicId: result.public_id,
      });
      await fs.unlink(file.path);
    }

    return fileUrl;
  }
};

export { cloudinaryUpload };
