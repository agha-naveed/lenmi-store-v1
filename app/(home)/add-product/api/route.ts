import * as nextConnect from 'next-connect'
import dbConnection from "@/lib/database/dbConnection";
import multer from 'multer';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // The folder where the files will be saved
      cb(null, './public/uploads'); 
    },
    filename: (req, file, cb) => {
      // Use a unique timestamp for each file to avoid name collisions
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

const upload = multer({ storage });

const uploadMiddleware = upload.array('image');


export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
      // Using the multer middleware to handle file upload
      uploadMiddleware(req, res, (err) => {
        if (err) {
          // If an error occurs during upload, respond with error
          return res.status(500).json({ message: 'Error uploading file', error: err });
        }
  
        if (!req.file) {
          // If no file is uploaded, return an error
          return res.status(400).json({ message: 'No file uploaded' });
        }
  
        // Construct the image URL to be used in the frontend
        const imageUrl = `/uploads/${req.file.filename}`;
  
        // Respond with the image URL (you can also store it in a database here)
        return res.status(200).json({
          message: 'Image uploaded successfully!',
          imageUrl,
        });
      });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }