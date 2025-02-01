// // pages/api/upload.js
// import nextConnect from 'next-connect';
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

// // Use Multer as the middleware
// const upload = multer({ storage: storage });

// // Create a Next.js API route handler using next-connect
// const handler = nextConnect();

// // Handle the file upload
// handler.use(upload.single('image')).post((req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const imageUrl = `/uploads/${req.file.filename}`;  // URL to access the image

//   // You can save imageUrl to the database here, if you want
//   // For now, we're just returning it as part of the response

//   return res.status(200).json({
//     message: 'Image uploaded successfully',
//     imageUrl,  // The URL of the uploaded image
//   });
// });

// export default handler;
