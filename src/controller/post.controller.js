// Import the Image model
const Image = require('../models/post.model');
const multer = require('multer')
const cloudinary = require('cloudinary').v2


cloudinary.config({ 
  cloud_name: 'dzewi2mi4', 
  api_key: '841692242854859', 
  api_secret: '7v7-lKbd6wPr4rgb29h3SXn8CGo' 
});

//specify the storage
// const Storage = multer.diskStorage({
//   destination:'uploads',
//   filename:(req,file,cb)=>{
//     cb(null,file.originalname)
//   }
// })

// const Storage = multer.memoryStorage()

// const upload = multer({
//   storage:Storage,
// }).single('testImage')

const createPost = async(req,res)=>{
  let file = req.files.testImage
  console.log("the req.filei s ",req.files.testImage)
  cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
    }
  })
  // upload(req,res,(err)=>{
  //   if(err){
  //     console.log(err)
  //   }else{
  //     console.log("The file is ",req.file)
  //     const base64Image = req.file.buffer.toString('base64');
     

  //     const newImage = new Image({
  //       name:req.body.name,
  //       image:base64Image
  //       // image:{
  //       //   data:base64Image,
  //       //   contentType:'image/png'
  //       // }
  //     })

  //     newImage.save()
  //     .then(()=>{
  //       res.send('Uploaded Successfully')
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })
  //   }
  // })
}

// // Create a function to save an image to the database
// const createPost = async (req, res) => {
//     // Assuming you receive the image binary data in the request body
//     const { imageBuffer, contentType } = req.body;
//     console.log("The req. body is ",req.body)
  
//     try {
//       // Create an Image instance
//       const newImage = new Image({
//         data: imageBuffer,
//         contentType,
//       });
  
//       // Save the image to the database
//       const savedImage = await newImage.save();
  
//       console.log('Image saved to the database:', savedImage);
//       res.status(201).json({ message: 'Image saved to the database', savedImage });
//     } catch (error) {
//       console.error('Failed to save the image:', error);
//       res.status(500).json({ message: 'Failed to save the image' });
//     }
//   };

module.exports = {
    createPost,
};
