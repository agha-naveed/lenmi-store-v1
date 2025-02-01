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
const handler = nextConnect<NextApiRequest, NextApiResponse>();


export async function POST() {
    await dbConnection()

}