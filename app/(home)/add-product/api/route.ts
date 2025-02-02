import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import connectToDatabase from "@/lib/database/dbConnection";
import { NextResponse } from "next/server";
import Product from "@/lib/database/model/product";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Extend NextApiRequest
interface NextApiRequestWithFile extends NextApiRequest {
  file?: Express.Multer.File;
}

// MongoDB connection
connectToDatabase();

// Use memory storage for debugging first
const storage = multer.memoryStorage();
const upload = multer({ storage });


export async function POST(
  req: NextApiRequestWithFile,
  res: NextApiResponse
) {
  try {
    console.log("Incoming request method:", req.method);

    console.log("Uploading file...");

    return new Promise<void>((resolve, reject) => {
      upload.single("file")(req as any, res as any, async (err) => {
        if (err) {
          console.error("Multer error:", err);
          return reject(NextResponse.json({ message: "Upload Error", error: err.message }));
        }

        console.log(await req)

        // if (!req.file) {
        //   console.error("No file found in request");
        //   return reject(NextResponse.json({ message: "No file uploaded" }));
        // }

        // console.log("File received:", req.file.originalname);

        // const { buffer, originalname, mimetype } = req.file;

        // const db = await connectToDatabase();
        // const collection = db.collection("images");

        // const result = await Product.insertMany([{
        //   imgURL : buffer
        // }]);

        // console.log("File successfully uploaded with ID:", result);

        return NextResponse.json({message: "ok"})
      });
    });

  } catch (error: any) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message });
  }
}
