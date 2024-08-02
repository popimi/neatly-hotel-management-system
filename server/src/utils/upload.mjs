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

  const fileUrls = [];
  console.log("file",files);
  let results 
  if(files.main_image){
    for (let file of files.main_image) {
      try{
        results = await cloudinary.uploader.upload(file.path, {
        folder: "images",
        type: "private",
      });}catch(e){
        console.log("it",e);
      }
      
      fileUrls.push({
        url: results.secure_url,
        publicId: results.public_id,
      });
      await fs.unlink(file.path);
    }

    return fileUrls;
  }

  const fileUrlLogo = [];
  console.log("logo",files);

  
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
      }console.log(results);
      
      fileUrlLogo.push({
        url: photo.secure_url,
        publicId: photo.public_id,
      });
      console.log(fileUrlLogo);
      
      await fs.unlink(file.path);
    }

    return fileUrlLogo;
  }
  
};


export { cloudinaryUpload };
