import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  try {
    await dbConnection()
    
    const formData = await req.formData();

    const file = formData.getAll("file") as File[]
    
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const color = JSON.parse(formData.get("color") as string)
    const stock = formData.get("stock") as string

    console.log(formData.get('file'))

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    console.log("File received:", file);

    // let buffer:any[] = []
    // let arrayBuffer
    // file.forEach(async (items, index) => {
    //   arrayBuffer = await items.arrayBuffer();
    //   buffer[index] = Buffer.from(arrayBuffer);
    // })

    const buffers = await Promise.all(
      file.map(async (files) => {
        const arrayBuffer = await files.arrayBuffer();
        return Buffer.from(arrayBuffer)
      })
    );

    await Product.insertMany([
      {
        name,
        price,
        description,
        category,
        color,
        stock,
        imgURL: buffers
      }
    ])

    return NextResponse.json({
      message: "ok",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
