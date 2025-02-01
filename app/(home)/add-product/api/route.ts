// import multer from 'multer';
// import path from 'path';

// // Set up Multer storage to save uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads');  // Folder to save uploaded images
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));  // Use a unique name for the file
//   },
// });