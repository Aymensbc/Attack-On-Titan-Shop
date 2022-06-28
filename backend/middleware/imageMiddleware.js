const multer = require("multer");

//upload parameteres for multer
const uploadImage = (req, res, next) => {
  //define Storage for the images
  const storage = multer.diskStorage({
    //destination for files
    destination: (req, file, callback) => {
      callback(null, "../productImages");
    },

    //add back the extension
    filename: (req, file, callback) => {
      callback(null, Date.now() + file.originalname);
    },
  });

  multer({
    storage: storage,
    limit: {
      fieldSize: 1024 * 1024 * 3,
    },
  }).single("img");
  next();
};
module.exports = { uploadImage };
