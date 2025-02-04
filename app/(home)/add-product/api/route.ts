import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  
  try {
    await dbConnection()
    
    const formData = await req.formData();

    const imageURL = formData.getAll("imgFile") as string[]
    
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const color = JSON.parse(formData.get("color") as string)
    const stock = formData.get("stock") as string


    if (!imageURL) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }



    // Get User Object
    async function getUserId() {
      
    }

    await Product.insertMany([
      {
        userId: "",
        name,
        price,
        description,
        category,
        color,
        stock,
        imgURL: imageURL  
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
