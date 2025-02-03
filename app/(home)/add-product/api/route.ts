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

    const arrayBuffer = await file[0].arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    
    await Product.insertMany([
      {
        name,
        price,
        description,
        category,
        color,
        stock,
        imgURL: buffer
      }
    ])

    console.log("File details:", {
      name: file[0].name,
      type: file[0].type,
      size: file[0].size,
    });

    return NextResponse.json({
      message: "ok",
      file: {
        name: file[0].name,
        type: file[0].type,
        size: file[0].size,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
