// import multer from "multer";

// // Config multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// // Export upload
// export const upload = multer({ storage: storage });




import multer from "multer";

// Config multer
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Export upload
export const upload = multer({ storage: storage });








// import multer from "multer";

// // Config multer
// const storage = multer.diskStorage({

//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}- ${file.originalname}`);
//   },
// });


// const upload = multer({ storage});

// // Export upload
// export default upload 