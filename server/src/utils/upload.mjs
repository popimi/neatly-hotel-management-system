import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  // main_post
  const fileUrl = [];
  console.log("file",files);
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

  //main_put
  // const fileUrls = [];
  // console.log("file",files);
  // let results 
  // if(files.main_image){
  //   for (let file of files.main_image) {
  //     try{
  //       results = await cloudinary.uploader.upload(file.path, {
  //       folder: "images",
  //       type: "private",
  //     });}catch(e){
  //       // console.log("it",e);
  //     }
      
  //     fileUrls.push({
  //       url: results.secure_url,
  //       publicId: results.public_id,
  //     });
  //     await fs.unlink(file.path);
  //   }

  //   return fileUrls;
  // }

  //logo
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
      }console.log(photo);
      
      fileUrlLogo.push({
        url: photo.secure_url,
        publicId: photo.public_id,
      });
      console.log(fileUrlLogo);
      
      await fs.unlink(file.path);
    }

    return fileUrlLogo;
  }

//   //image_gallery_put
//   const fileUrlUpdateManyRooms = [];
//   console.log("gallery",files);
//   let updatePhoto 
//   if(files.image_gallery){
//     for (let file of files.image_gallery) {
//       try{
//         updatePhoto = await cloudinary.uploader.upload(file.path, {
//         folder: "images",
//         type: "private",
//       }
//     );} catch(e){
//         // console.log("it",e);
//       }console.log(updatePhoto);
      
//       fileUrlLogo.push({
//         url: updatePhoto.secure_url,
//         publicId: updatePhoto.public_id,
//       });
//       console.log(fileUrlLogo);
      
//       await fs.unlink(file.path);
//     }

//     return fileUrlUpdateManyRooms;
//   }
  
//   //image_gallery_post
//   const fileUrlGallery = [];
//   console.log("logo",files);
//   let gallery 
//   if(files.image_gallery){
//     for (let file of files.image_gallery) {
//       try{
//         gallery = await cloudinary.uploader.upload(file.path, {
//         folder: "images",
//         type: "private",
//       }
    
//     );} catch(e){
//         // console.log("it",e);
//       }console.log(gallery);
      
//       fileUrlLogo.push({
//         url: gallery.secure_url,
//         publicId: gallery.public_id,
//       });
//       console.log(fileUrlLogo);
      
//       await fs.unlink(file.path);
//     }

//     return fileUrlGallery;
//   }
  
};


export { cloudinaryUpload };
