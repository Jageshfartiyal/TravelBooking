const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  image:{
    type:String
  }
  // data: Buffer,  // Store image data as a Buffer
  // contentType: String,  // Store the content type (e.g., image/jpeg, image/png)
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
