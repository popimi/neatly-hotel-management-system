import { v2 as cloudinary } from "cloudinary";

import fs from "fs/promises";

const cloudinaryProfileUpload = async (files) => {
  const fileUrl = [];
  let result 
  if(files.profile_picture){
    for (let file of files.profile_picture) {
      try{
       result = await cloudinary.uploader.upload(file.path, {
        folder: "doraemon",
        type: "private",
      })
      
      ;}catch(e){
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

export { cloudinaryProfileUpload };