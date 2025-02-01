import { NextApiRequest, NextApiResponse } from "next";
import formidable, {errors as formidableErrors} from 'formidable'
import {promises as fs} from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  }
}

export default async function POST(req:NextApiRequest, res:NextApiResponse) {
  
  const form = formidable({ multiples: true })

  let fields, files;
  try {
    [fields, files] = await form.parse(req);
    const imageFile = files?.file?.[0];

    if(!imageFile || !imageFile.filepath)
      return res.status(400).json({message: "No image file uploaded!"})

    const uploadDir = path.join(process.cwd(), 'public', 'uploads')

    await fs.mkdir(uploadDir, {recursive: true})

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    const newFileName = `${uniqueSuffix}-${imageFile.originalFilename}`;
    const newFilePath = `${uploadDir}/${newFileName}`;
    
    await fs.rename(imageFile.filepath, newFilePath)
    
    console.log("Uploaded image: "+newFilePath)

    res.status(200).json({
      message: "ok",
      imageURL: `/uploads/${newFileName}`
    })
  } catch(e) {
    console.log("afsoos!")
  }

}