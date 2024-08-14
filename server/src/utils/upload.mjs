import { v2 as cloudinary } from "cloudinary";

import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  // main_post
  const fileUrl = [];

  
  let result 
  if(files.main_image){
    for (let file of files.main_image) {
      try{
       result = await cloudinary.uploader.upload(file.path, {
        folder: "images",
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

  //logo
  const fileUrlLogo = [];
  let photo 
  if(files.logo){
    for (let file of files.logo) {
      try{
        photo = await cloudinary.uploader.upload(file.path, {
        folder: "images",
        type: "private",
      }
    
    );} catch(e){
        console.log("it",e);
      }
      
      fileUrlLogo.push({
        url: photo.secure_url,
        publicId: photo.public_id,
      });

      
      await fs.unlink(file.path);
    }

    return fileUrlLogo;
  }

};


export { cloudinaryUpload };
