import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  try {
    await dbConnection()
    
    const formData = await req.formData();

    const file = formData.get("file") as File;
    
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const color = formData.get("color") as string
    const stock = formData.get("stock") as string

    console.log(formData.get("file"))
    console.log(formData)

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    console.log("File received:", file);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log("Buffer: " + buffer)
    
    await Product.insertMany([
      {
        name,
        price,
        description,
        category,
        stock,
        imgURL: buffer
      }
    ])

    console.log("File details:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    return NextResponse.json({
      message: "ok",
      file: {
        name: file.name,
        type: file.type,
        size: file.size,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
